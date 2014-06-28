footer = COA
footer {
    10 = HMENU
    10 {
        wrap = <div class="col-md-4 md-margin-bottom-40"><div class="headline"><h2>Sitemap</h2></div><ul>|</ul></div>
        1 = TMENU
        1.expAll = 1
        1 {
            stdWrap.prepend = TEXT
            stdWrap.prepend.typolink.parameter.data = leveluid : 0
            stdWrap.prepend.value = Startseite
            stdWrap.prepend.wrap = <li>|</li>
        }
        1.NO {
            wrapItemAndSub = <li> | </li>
        }
        1.ACT = 1
        1.ACT.wrapItemAndSub = <li> | </li>
        2 < .1
        2.stdWrap.prepend >
        2.wrap = <ul>|</ul>
    }
    20 = COA
    20.wrap = <div class="col-md-4 md-margin-bottom-40">|</div>
    20.10 = TEXT
    20.10.value (
                <div class="headline"><h2>Kontakt</h2></div>
                <p>
                Tanzschule<br/>
                Dessauer Str. 13<br/>
                12345 Berlin<br/><br/>
                Telefon: 0123 - 45678<br/>
                Telefax: 0123 – 45679<br/>
                E-Mail: <a href="mailto:a@bc.de">a(at)bc.de</a>
                </p>
    )

    30 = COA
    30 {
        wrap = <div class="col-md-4"><div class="headline"><h2>Wir auf facebook</h2></div>|</div>
        10 = TEXT
        10.value = <i class="icon-facebook-sign"></i>
        10.typolink.parameter = https://www.facebook.com/TanzschuleHarnisch

    }

}