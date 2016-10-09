# UI Permissions Extension #

Provides a read only view for all permissions in the system. Shows up as a menu item in the top menu in XLD UI. Click on Reload Permissions button to reload permissions. An initial jar file xld-ui-permissions_12012014.jar  as been put in the repository for users who are not familiar with gradle.

# CI status #

[![Build Status][xld-ui-permissions-plugin-travis-image]][xld-ui-permissions-plugin-travis-url]
[![Codacy Badge][xld-ui-permissions-plugin-codacy-image] ][xld-ui-permissions-plugin-codacy-url]
[![Code Climate][xld-ui-permissions-plugin-code-climate-image] ][xld-ui-permissions-plugin-code-climate-url]

[xld-ui-permissions-plugin-travis-image]: https://travis-ci.org/xebialabs-community/xld-ui-permissions-plugin.svg?branch=master
[xld-ui-permissions-plugin-travis-url]: https://travis-ci.org/xebialabs-community/xld-ui-permissions-plugin
[xld-ui-permissions-plugin-codacy-image]: https://api.codacy.com/project/badge/Grade/ec6eb8c7e9bc45ebae4a106ed505f552
[xld-ui-permissions-plugin-codacy-url]: https://www.codacy.com/app/joris-dewinne/xld-ui-permissions-plugin
[xld-ui-permissions-plugin-code-climate-image]: https://codeclimate.com/github/xebialabs-community/xld-ui-permissions-plugin/badges/gpa.svg
[xld-ui-permissions-plugin-code-climate-url]: https://codeclimate.com/github/xebialabs-community/xld-ui-permissions-plugin



# Requirements #

* **Deployit requirements**
	* **Deployit**: version 4.5.2+

# Installation #

Build the project:
```
gradle build
```

Copy the extension to the plugins folder of your XLD installation:
```
cp ./build/libs/xld-ui-permissions.jar $XLD_HOME/plugins
```

# Snapshot #

![Configuration] (/screenshot.png)
