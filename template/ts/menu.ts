menu.main = HMENU
menu.main {
    entryLevel = 0
    wrap = <ul class="nav navbar-nav navbar-right">|</ul>
    1 = TMENU
    1 {
        expAll = 1
        /*
                stdWrap.prepend = TEXT
                stdWrap.prepend.typolink.parameter.data = leveluid : 0
                stdWrap.prepend.value = Startseite
                stdWrap.prepend.wrap = <li class="home">|</li>
                }
                */
        NO {
            wrapItemAndSub = <li> | </li>
        }
        ACT = 1
        ACT.wrapItemAndSub = <li class="active"> | </li>
        IFSUB = 1
        IFSUB {
            wrapItemAndSub = <li class="dropdown">|</li>
            #ATagBeforeWrap = 1
            stdWrap.wrap = |<i class="icon-angle-down"></i>
            ATagParams = class="dropdown-toggle disabled" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false"
        }
        #ACTIFSUB = 1
        ACTIFSUB < .IFSUB
        ACTIFSUB.wrapItemAndSub = <li class="dropdown active">|</li>

    }
    2 < .1
    2.stdWrap.prepend >
    2.wrap = <ul class="dropdown-menu">|</ul>

}