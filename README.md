# Skotha CSS


## Documentation
Skotha CSS uses the ole' OMCSS (Organizable and Maintainable CSS) way as a means to keep things scalable.

OMCSS is an approach that will help designers and developers write code that will be future-clean and scalable at the same time. OMCSS' file structure helps developer organise their stylesheets in a manner that produces understandable and clean css structure that is easy to organise and maintain - OMCSS

### OMCSS File Structure

OMCSS is a modular approach that helps you arrange your css into `theme`, `pages`, `layouts` and `modules`. Along with these, it also provide helper folders i.e. `base`, `utils` and `vendors` to organise your helper css files.

Below is a complete description of OMCSS file structure:

* **Base**
Base contains css styles on base content such as reset, grid, typography etc.

* **Themes**
Themes contains css styles for your application themes such as primary, secondary, default, dashboard etc.

* **Pages**
Pages contains css styles for your individual pages such as home, about-us, contact etc.

* **Layouts**
Layouts contains css style for main application components such as header, footer, sidebar etc.  

* **Modules**
Modules contains css style for re-usable application ui components such as carousel, navigation, breadcrumb, card etc.

* **Utils**
Modules contains utility styles such as mixins, functions, variables etc.

* **Vendors**
Vendor contains third-party css libraries and frameworks such as jquery-ui, bootstrap, foundation etc.

* **Shame**
Shame contains css styles that you are shame about or you have written as an urgent request and will soon change it and write proper code. Its wise to write messy css for any of the above styles over here.

### Naming Convention

OMCSS follows Kebab case naming convention in its core e.g. `.txt-white`, `.nav-item` etc.

For components that contains sub-classes, OMCSS encourages `_underscore` naming convention which add an underscore as it goes within the tree:

```
.parent {
  ._child {
    .__sub-child {
      ...
    }
  }
}
```

Please note that above convention is not mandatory. It will facilitate developers to write consistent and future-proof code. However you are free to use any convention of your choice.

## Credits

Bootstrap and OMCSS (Using there grid system and project is structured by OCMCSS).