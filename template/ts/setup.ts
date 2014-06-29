<INCLUDE_TYPOSCRIPT:source="file:fileadmin/template/ts/config.ts">
<INCLUDE_TYPOSCRIPT:source="file:fileadmin/template/ts/menu.ts">
<INCLUDE_TYPOSCRIPT:source="file:fileadmin/template/ts/lib.ts">
#<INCLUDE_TYPOSCRIPT:source="file:fileadmin/template/ts/plugin.ts">

page = PAGE
page {
    headerData {
        10 = TEXT
        10.value = <meta name="viewport" content="width=device-width, initial-scale=1">
    }

    includeCSS.bootstrap = fileadmin/template/css/bootstrap.min.css
    includeCSS.style = fileadmin/template/css/style.css

    includeJSFooterlibs.jquery = https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
    includeJSFooter.bootstrap = fileadmin/template/js/bootstrap.min.js

    10 = FLUIDTEMPLATE
    10 {
        #one template
        file = fileadmin/template/index.html

        #template depends on backend_layout
        /*
        file.stdWrap.cObject = CASE
        file.stdWrap.cObject {
            key.data = levelfield:-1, backend_layout_next_level, slide
            key.override.field = backend_layout

            default = TEXT
            default.value = fileadmin/template/default.html

            #backend_layout uid
            1 = TEXT
            1.value = fileadmin/template/template1.html

            2 = TEXT
            2.value = fileadmin/template/template2.html

            3 = TEXT
            3.value = fileadmin/template/template3.html
        }
        */
        layoutRootPath = fileadmin/template/layouts/
        partialRootPath = fileadmin/template/partials/

        variables {
            content < styles.content.get
            main < menu.main
            footer < lib.footer
        }
    }
}
