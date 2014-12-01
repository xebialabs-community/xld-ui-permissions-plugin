# UI Permissions Extension #

Provides a read only view for all permissions in the system. Shows up as a menu item in the top menu in XLD UI. Click on Reload Permissions button to reload permissions. An initial jar file xld-ui-permissions_12012014.jar  as been put in the repository for users who are not familiar with gradle.

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
