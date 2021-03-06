package com.prj.boilerplate.global.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.prj.boilerplate.global.jwt.*;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	private final TokenProvider tokenProvider;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;
 
    public SecurityConfig(
            TokenProvider tokenProvider,
            JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
            JwtAccessDeniedHandler jwtAccessDeniedHandler
    ) {
        this.tokenProvider = tokenProvider;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.jwtAccessDeniedHandler = jwtAccessDeniedHandler;
    }
 
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
 
    @Override
    public void configure(WebSecurity web) {
    	/* 이 부분 필요 없음
        web
                .ignoring()
                .antMatchers(
                		"/css/**",
                		"/js/**",
                		"/fonts/**",
                		"/images/**",
                		"/img/**",
                        "/favicon.ico"
                );
                */ 
    }
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		 http
         .csrf().disable() // 토큰 방식을 사용하기 때문에 csrf를 disable 한다.

         .exceptionHandling()
         .authenticationEntryPoint(jwtAuthenticationEntryPoint) // 내가 만든 핸들러를 추가
         .accessDeniedHandler(jwtAccessDeniedHandler) // 내가 만든 핸들러를 추가

         .and()
         .headers()
         .frameOptions()
         .sameOrigin()

         // 세션을 사용하지 않기 때문에 하는 설정
         .and()
         .sessionManagement() 
         .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
         
         /*
          * spa 에서는 프론트엔드 부분에서 자바스크립트로 처리한다.
          
         .and()
         .authorizeRequests() //토큰이 없는 요청은 허용한다. 메인페이지, 로그인, 회원가입
         .antMatchers("/**").permitAll()
         .anyRequest().authenticated()
          */
         .and()
         .apply(new JwtSecurityConfig(tokenProvider)); // jwtFilter를 등록한다.
	}
}
