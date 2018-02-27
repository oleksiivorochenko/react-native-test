
# **Support dGarson**

### Project structure
https://github.com/avorochenko/react-native-test.wiki.git

Open the folder "$_PROJECT_DIR/src".

* Folder "services" described classe access to the state store and access to external services. If you want something to add or change in the logic of the project, please do it here. 
* Folder "helpers" contains module for working with FCM and platform. 
* Folder "media" contains images for project. 
* Folder "components"  сontains a nested structure of components. If you want to add or change a component please follow our structure.
* Folder "realm" contains classes work with Realm DB.
* Folder "translations" contains constants. If you want to add support for additional languages, expand this module. 
* Folders "reducers" and "store" content modules for FLUX technology.

### Background img

You can modify or add your own img in the folder "$_PROJECT_DIR/android/app/src/main/res".

### Fonts

You can modify or add your own fonts in the folder "$_PROJECT_DIR/android/app/src/main/assets/fonts".

### Custom Styles

You can modify or add your own styles in the folder "$_PROJECT_DIR/src/styles/".



# **Change Log**

## Version 1.0.0 - Lemon Tart - 23th February 2018

### Updates

* We are using new version react-native (0.52).
* Also we optimized the code. What about the code? Our team took care of the extensibility and easy support. 
* We have implemented nesting of components for ease of understanding of the application. 
* Also you can easily implement your components thanks to compact rendering methods.
* We take care of using the latest version of FCM.
* Also our team optimized structure of data storage.


### Bug Fixes

* When viewing the location of a cafe, automatic scale-up is fixed.
