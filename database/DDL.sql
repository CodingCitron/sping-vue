CREATE TABLE public.spring_vue_user (
	user_name varchar(48) NOT NULL,
	user_pwd varchar(96) NOT NULL,
	user_nickname varchar(48) NOT NULL,
	CONSTRAINT spring_vue_user_pk PRIMARY KEY (user_name)
);
