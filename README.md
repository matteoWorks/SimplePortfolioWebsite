# Simple Portfolio Website

[![React 18.3.1](https://img.shields.io/badge/React-18.3.1-027fa5.svg)](https://18.react.dev/)
[![react-scripts 5.0.1](https://img.shields.io/badge/react--scripts-5.0.1-af0506.svg)](https://www.npmjs.com/package/react-scripts/v/5.0.1)
[![web-vitals 2.1.4](https://img.shields.io/badge/web--vitals-2.1.4-af0506.svg)](https://www.npmjs.com/package/web-vitals/v/2.1.4)
[![react-scroll 1.9.0](https://img.shields.io/badge/react--scroll-1.9.0-af0506.svg)](https://www.npmjs.com/package/react-scroll/v/1.9.0)
[![TailwindCSS 3.4.14](https://img.shields.io/badge/TailwindCSS-3.4.14-0fa5e9.svg)](https://tailwindcss.com/docs/installation)

> [!NOTE]
> The content of this Repository is not guaranteed to work with versions different from the ones listed above; \
> Versions can also be checked in the "package.json" files.

## Table of Contents

+ [About](#about)
+ [Getting Started](#gettingStarted)
    + [React Prerequisites](#reactPrerequisites)
    + [Assets](#assets)
    + [Website Variables Definition](#websiteVariablesDefinition)
    + [Personal Variables Definition](#personalVariablesDefinition)
+ [Execution](#execution)
    + [Build](#build)
  
## About <a name = "about"></a>

This repository provides a simple, customizable template for a portfolio website built with React and TailwindCSS. Feel free to personalize it by replacing the placeholder information with your own. \
The result can be seen on my own [website](https://matteobaggio.com). 

## Getting Started <a name = "gettingStarted"></a>

### React Prerequisites <a name = "reactPrerequisites"></a>

_React_ is required, along with the _react-scripts_, _web-vitals_ and _react-scroll_ packages and the _TailwindCSS_ framework. \
The versions used in the template are _React 18.3.1_, _react-scripts 5.0.1_, _web-vitals 2.1.4_, _react-scroll 1.9.0_ and _TailwindCSS 3.4.14_, however any version should work, but without a guarantee, so make sure to test the functionality when using different versions. 

### Assets <a name = "assets"></a>

Due to the straightforward nature of this template, this portfolio website heavily emphasizes visual elements that represent skills, experiences, and education of an individual. Hence many images related to skills are used. These images are located in the "_portfolio-website/src/assets_" folder and are named in the following format: "_logo\_\[SKILL\_NAME\].png_".

To add a new image, rename it using the template "_logo\_\[SKILL\_NAME\].png_" and place it in the "_portfolio-website/src/assets_" folder.

> [!TIP]
> This template includes a basic set of assets, some of which may not be necessary for your portfolio website. Hence it is recommended to remove unused assets to keep your project clean and efficient; \
> It is also recommended to add your own assets to customize the template further.

The already available images related to skills are the following, shown in alphabetical order: \
\
<img src="/portfolio-website/src/assets/logo_anaconda.png" alt="Anaconda" width="36" />
<img src="/portfolio-website/src/assets/logo_axios.png" alt="Axios" width="36" />
<img src="/portfolio-website/src/assets/logo_codecov.png" alt="Codecov" width="36" />
<img src="/portfolio-website/src/assets/logo_cpp.png" alt="C++" width="36" />
<img src="/portfolio-website/src/assets/logo_css3.png" alt="CSS3" width="36" />
<img src="/portfolio-website/src/assets/logo_docker.png" alt="Docker" width="36" />
<img src="/portfolio-website/src/assets/logo_eslint.png" alt="ESLint" width="36" />
<img src="/portfolio-website/src/assets/logo_express_day.png" alt="Express Day" width="36" />
<img src="/portfolio-website/src/assets/logo_express_night.png" alt="Express Night" width="36" />
<img src="/portfolio-website/src/assets/logo_filezilla.png" alt="FileZilla" width="36" />
<img src="/portfolio-website/src/assets/logo_flask.png" alt="Flask" width="36" />
<img src="/portfolio-website/src/assets/logo_gcc.png" alt="GCC" width="36" />
<img src="/portfolio-website/src/assets/logo_github_day.png" alt="GitHub Day" width="36" />
<img src="/portfolio-website/src/assets/logo_github_night.png" alt="GitHub Night" width="36" />
<img src="/portfolio-website/src/assets/logo_githubactions.png" alt="GitHub Actions" width="36" />
<img src="/portfolio-website/src/assets/logo_html5.png" alt="HTML5" width="36" />
<img src="/portfolio-website/src/assets/logo_huggingface.png" alt="Hugging Face" width="36" />
<img src="/portfolio-website/src/assets/logo_idapro.png" alt="IDA Pro" width="36" />
<img src="/portfolio-website/src/assets/logo_javascript.png" alt="JavaScript" width="36" />
<img src="/portfolio-website/src/assets/logo_jest.png" alt="Jest" width="36" />
<img src="/portfolio-website/src/assets/logo_json.png" alt="JSON" width="36" />
<img src="/portfolio-website/src/assets/logo_jupyter.png" alt="Jupyter" width="36" />
<img src="/portfolio-website/src/assets/logo_latex_day.png" alt="LaTeX Day" width="36" />
<img src="/portfolio-website/src/assets/logo_latex_night.png" alt="LaTeX Night" width="36" />
<img src="/portfolio-website/src/assets/logo_llamacpp.png" alt="LlamaCpp" width="36" />
<img src="/portfolio-website/src/assets/logo_lmstudio.png" alt="LMStudio" width="36" />
<img src="/portfolio-website/src/assets/logo_matlab.png" alt="MATLAB" width="36" />
<img src="/portfolio-website/src/assets/logo_microsoftexcel.png" alt="Microsoft Excel" width="36" />
<img src="/portfolio-website/src/assets/logo_microsoftword.png" alt="Microsoft Word" width="36" />
<img src="/portfolio-website/src/assets/logo_net.png" alt=".NET" width="36" />
<img src="/portfolio-website/src/assets/logo_nodejs.png" alt="Node.js" width="36" />
<img src="/portfolio-website/src/assets/logo_npm.png" alt="npm" width="36" />
<img src="/portfolio-website/src/assets/logo_openapi_day.png" alt="OpenAPI Day" width="36" />
<img src="/portfolio-website/src/assets/logo_openapi_night.png" alt="OpenAPI Night" width="36" />
<img src="/portfolio-website/src/assets/logo_php.png" alt="PHP" width="36" />
<img src="/portfolio-website/src/assets/logo_pytest.png" alt="PyTest" width="36" />
<img src="/portfolio-website/src/assets/logo_python.png" alt="Python" width="36" />
<img src="/portfolio-website/src/assets/logo_python_numpy.png" alt="Python NumPy" width="36" />
<img src="/portfolio-website/src/assets/logo_python_pandas.png" alt="Python Pandas" width="36" />
<img src="/portfolio-website/src/assets/logo_python_pytorch.png" alt="Python PyTorch" width="36" />
<img src="/portfolio-website/src/assets/logo_python_tensorflow.png" alt="Python TensorFlow" width="36" />
<img src="/portfolio-website/src/assets/logo_qt.png" alt="Qt" width="36" />
<img src="/portfolio-website/src/assets/logo_reactjs.png" alt="ReactJS" width="36" />
<img src="/portfolio-website/src/assets/logo_ruff.png" alt="Ruff" width="36" />
<img src="/portfolio-website/src/assets/logo_sonarqube.png" alt="SonarQube" width="36" />
<img src="/portfolio-website/src/assets/logo_sql.png" alt="SQL" width="36" />
<img src="/portfolio-website/src/assets/logo_sql_microsoftsqlserver.png" alt="SQL Microsoft SQL Server" width="36" />
<img src="/portfolio-website/src/assets/logo_sql_mysql.png" alt="SQL MySQL" width="36" />
<img src="/portfolio-website/src/assets/logo_sql_postgresql.png" alt="SQL PostgreSQL" width="36" />
<img src="/portfolio-website/src/assets/logo_staruml.png" alt="StarUML" width="36" />
<img src="/portfolio-website/src/assets/logo_tailwindcss.png" alt="TailwindCSS" width="36" />
<img src="/portfolio-website/src/assets/logo_typst_day.png" alt="Typst Day" width="36" />
<img src="/portfolio-website/src/assets/logo_typst_night.png" alt="Typst Night" width="36" />
<img src="/portfolio-website/src/assets/logo_uml.png" alt="UML" width="36" />
<img src="/portfolio-website/src/assets/logo_visualbasic.png" alt="Visual Basic" width="36" />
<img src="/portfolio-website/src/assets/logo_visualstudiocode.png" alt="Visual Studio Code" width="36" />
<img src="/portfolio-website/src/assets/logo_wireshark.png" alt="Wireshark" width="36" />

### Website Variables Definition <a name = "websiteVariablesDefinition"></a>

The website variables that need to be modified are the ones related the homepage URL and the website title/name. \
These variables are found and can be edited in the "_portfolio-website/package.json_", "_portfolio-website/public/favicon.ico_", "_portoflio-website/public/index.html_" and "_portfolio-website/public/manifest.json_" files:

- _portfolio-website/package.json_ (lines 1 to 3):
```json
{
  "homepage": "",
  "name": "portfolio-website",
```
Add your website's Homepage URL to the _homepage_ variable in line 2;

- _portfolio_website/favicon.ico_ (whole file);

- _portoflio-website/public/index.html_ (lines 8 to 11):
```html
    <meta
      name="description"
      content="Portfolio Website"
    />
```
Change the content of the "_content_" variable from "_Portfolio Website_" to your website's content (ideally "_Name Surname Portfolio_") in line 10;

- _portoflio-website/public/index.html_ (lines 27 to 28):
```html
    <title>My Portfolio</title>
  </head>
```
Change the content of the "_title_" tag from "_My Portfolio_" to your website's title (ideally "_Name Surname_") in line 27;

- _portoflio-website/public/manifest.json_ (lines 1 to 3):
```json
{
  "short_name": "Portfolio",
  "name": "My Portfolio",
```
Change the content of the "_short\_name_" and "_name_" variables from "_Portfolio_" and "_My Portfolio_" to your website's short name and name (ideally "_Name Portfolio_" and "_Name Surname Portfolio_") in line 2 and 3.

### Personal Variables Definition <a name = "personalVariablesDefinition"></a>

> [!TIP]
> Before modifying these variables, it is recommended to add images that represent the skills and knowledge you possess. This process is shown in the previous [Assets](#assets) section; \
> To improve the recognition of your skills, it's advisable to use official logos.

The personal variables that need to be added are those related to your experience, education, certifications, and skills. \
These variables are found in the "_portfolio-website/src/variables.json_" file.

## Execution <a name = "execution"></a>

### Build <a name = "build"></a>

To generate the final build, simply navigate to the "_portfolio-website_" folder and run the _npm run build_ command as shown:
```bash
$ cd path/to/portfolio-website
$ npm run build
```
The resulting _build_ folder is now ready to be uploaded to your domain.
