import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

--background: #fff;
--textPrimary: #223364;
--textSecondary: #3F5BBA;
--textTertiary: #848EA8;
--textNormal: #333;
--colorPrimary: var(--textSecondary);
--colorSecondary: #F55555;
--colorError : #F55555;
--colorSuccess : #4CAF50;
--fontBold: 'Work Sans', sans-serif;
--fontNormal: "Poppins", sans-serif;

.container {
	min-width: 100%;
}

* {
	margin: 0;
	padding: 0;
}



body {
	background: var(--background);
	font-family: var(--fontNormal);
	font-size: 18px;
	color: var(--textNormal);
}

nav {
	background: var(--background);

	&:after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background: linear-gradient(to left, var(--colorPrimary), var(--colorSecondary));
		opacity: 0;
		transition: opacity .35s;
	}

	&.scrolled:after {
		opacity: .2;
	}
}

.text-secondary {

	&,
	& a {
		color: var(--textSecondary);
	}
}

.text-tertiary {

	&,
	& a {
		color: var(--textTertiary);
	}
}

.text-primary {

	&,
	& a {
		color: var(--textPrimary);
	}
}

.color-primary {
	color: var(--colorPrimary);
}

.color-secondary {
	color: var(--colorSecondary);
}

.res-message {
	transition: opacity .35s;
	opacity: 0;
}

.res-message,
.color-success {
	color: var(--colorSuccess);
}

.color-error {
	color: var(--colorError);
}

.wall svg text {
	font: bold 10px sans-serif;
	font-family: var(--fontBold);
}

#menu-open path {
	fill: var(--textSecondary);
}

.font-bold,
h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: var(--fontBold);
}

.btn {
	height: 50px !important;
	line-height: 50px !important;
	font-size: 14px !important;
	letter-spacing: 1px;
	margin: 25px 0;
	padding: 0 45px !important;
	background-image: linear-gradient(to left, var(--colorPrimary), var(--colorSecondary)) !important;
	color: #fff !important;
	border: none !important;

	&.disabled {
		opacity: .7;
	}
}

.overlay-link {
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 2;
	left: 0;
	top: 0;
}

.pseudo-divider:after {
	content: "";
	position: absolute;
	width: 100%;
	height: 5px;
	background: linear-gradient(to left, var(--colorPrimary), var(--colorSecondary)) !important;
	bottom: -4px;
	left: 0;
}

.icon {
	width: 22px;
	height: 22px;
	display: inline-block;
	vertical-align: middle;
}

section {
	padding: 60px 0;


	svg {
		display: block;
		margin: 0 auto;

		text {
			font: bold 8px sans-serif;
			font-family: var(--fontBold);
		}
	}
}

.section-title {
	padding: 20px 0;
	margin-bottom: 35px;
	text-align: center;
}

.field-box {
	width: 100%;
	font-size: 20px;
	background: var(--background);
	color: var(--textNormal);
	position: relative;
	z-index: 2;
	outline: 0;
	display: block;
	resize: none;
}

.field-box:not(textarea) {
	height: 48px !important;
}

.input-border {
	padding: 1px;
	position: relative;

	&:after {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to left, var(--colorPrimary), var(--colorSecondary)) !important;
		border-radius: 5px;
	}
}

footer {
	background: darken(var(--background), 4%);
}

nav ul li a:before {
	background: var(--colorSecondary);
}

.sidebar-content {
	background: var(--background);
}

.pagination ul li {

	a {
		background: var(--colorPrimary);
		color: #fff;

		svg path {
			fill: #fff;
		}
	}

	&.active {
		a {
			background: linear-gradient(to left, var(--colorPrimary), var(--colorSecondary));
		}
	}
}

.fill-primary {

	&,
	& path {
		fill: var(--colorPrimary);
	}
}

.fill-secondary {

	&,
	& path {
		fill: var(--textSecondary);
	}
}

.blog-post blockquote {
	border-left: 3px solid var(--colorSecondary);
}


.dark-mode {
	--background: #171B27;
	--textPrimary: #c5c5c5;
	--textSecondary: #3F5BBA;
	--textTertiary: #848EA8;
	--textNormal: #b8b7bf;
	--colorPrimary: var(--textSecondary);
	--colorSecondary: #F55555;
	--colorError: #F55555;
	--colorSuccess: #4CAF50;


	& {
		background: var(--background);
		color: var(--textNormal);
	}

	nav {
		background: var(--background);
	}

	.text-secondary {

		&,
		& a {
			color: var(--textSecondary);
		}
	}

	.text-tertiary {

		&,
		& a {
			color: var(--textTertiary);
		}
	}

	.text-primary {

		&,
		& a {
			color: var(--textPrimary);
		}
	}

	.color-primary {
		color: var(--colorPrimary);
	}

	.color-secondary {
		color: var(--colorSecondary);
	}

	.res-message,
	.color-success {
		color: var(--colorSuccess);
	}

	.color-error {
		color: var(--colorError);
	}

	.field-box {
		background: var(--background);
		color: var(--textNormal);
	}

	footer {
		background: darken(var(--background), 4%);
	}

	nav ul li a:before {
		background: var(--colorSecondary);
	}

	.btn {
		background-image: linear-gradient(to left, var(--colorPrimary), var(--colorSecondary)) !important;
	}

	.pseudo-divider:after {
		background: linear-gradient(to left, var(--colorPrimary), var(--colorSecondary)) !important;
	}

	.sidebar-content {
		background: var(--background);
	}

	#menu-open path {
		fill: var(--textSecondary);
	}

}

div[role="navigation"] {
	display: none;
}

@media only screen and (max-width: 800px) {
	div[role="navigation"] {
		display: block;
	}

	.container {
		width: 95% !important;
	}

	section {
		padding: 30px 0;
	}

	section svg text {
		font: bold 12px sans-serif;
		font-family: 'Work Sans', sans-serif;
	}
}

.align-left {
	text-align: left;

}
`;
