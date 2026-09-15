/* ==============================
   SEASONSPHERE
   SEASON DETECTION LOGIC
   ============================== */


/* ---------- ELEMENTS ---------- */

const monthInput =
    document.getElementById("month");

const discoverButton =
    document.getElementById("discoverBtn");

const seasonName =
    document.getElementById("seasonName");

const seasonEmoji =
    document.getElementById("seasonEmoji");

const seasonDescription =
    document.getElementById("seasonDescription");


/* ---------- SEASON FINDER ---------- */

function findSeason() {

    const month =
        Number(monthInput.value);


    let season = "";
    let emoji = "";
    let description = "";


    /*
       This switch-case follows
       the same basic logic as
       your original C++ program.
    */

    switch (month) {


        /* ---------- WINTER ---------- */

        case 12:
        case 1:
        case 2:

            season = "Winter";

            emoji = "❄️";

            description =
                "A cool and peaceful season filled with crisp moments.";

            setSeasonTheme("winter");

            break;


        /* ---------- SUMMER ---------- */

        case 3:
        case 4:
        case 5:

            season = "Summer";

            emoji = "☀️";

            description =
                "A bright and energetic season full of warmth and sunshine.";

            setSeasonTheme("summer");

            break;


        /* ---------- RAINY ---------- */

        case 6:
        case 7:
        case 8:

            season = "Rainy";

            emoji = "🌧️";

            description =
                "A refreshing season where the world comes alive with rain.";

            setSeasonTheme("rainy");

            break;


        /* ---------- AUTUMN ---------- */

        case 9:
        case 10:
        case 11:

            season = "Autumn";

            emoji = "🍂";

            description =
                "A graceful season of change, colour and beautiful transitions.";

            setSeasonTheme("autumn");

            break;


        /* ---------- INVALID ---------- */

        default:

            season = "Invalid Month";

            emoji = "⚠️";

            description =
                "Please enter a valid month between 1 and 12.";

            setSeasonTheme("default");

    }


    /* ---------- UPDATE WEBSITE ---------- */

    seasonName.textContent =
        season;

    seasonEmoji.textContent =
        emoji;

    seasonDescription.textContent =
        description;


    /* ---------- ANIMATION ---------- */

    seasonEmoji.style.transform =
        "scale(0.7)";

    setTimeout(() => {

        seasonEmoji.style.transform =
            "scale(1)";

    }, 150);

}


/* ---------- SEASON THEMES ---------- */

function setSeasonTheme(season) {

    const themes = {

        default: `
            radial-gradient(
                circle at 15% 20%,
                rgba(255,190,100,0.35),
                transparent 30%
            ),
            radial-gradient(
                circle at 85% 15%,
                rgba(255,120,170,0.30),
                transparent 30%
            ),
            linear-gradient(
                135deg,
                #17112b,
                #281738,
                #122d43
            )
        `,


        winter: `
            radial-gradient(
                circle at 20% 20%,
                rgba(150,210,255,0.35),
                transparent 30%
            ),
            radial-gradient(
                circle at 80% 80%,
                rgba(180,150,255,0.25),
                transparent 35%
            ),
            linear-gradient(
                135deg,
                #101c3c,
                #173b5e,
                #17294d
            )
        `,


        summer: `
            radial-gradient(
                circle at 20% 15%,
                rgba(255,210,80,0.45),
                transparent 30%
            ),
            radial-gradient(
                circle at 85% 80%,
                rgba(255,130,80,0.35),
                transparent 35%
            ),
            linear-gradient(
                135deg,
                #452019,
                #873c24,
                #c76b2d
            )
        `,


        rainy: `
            radial-gradient(
                circle at 20% 20%,
                rgba(80,180,255,0.30),
                transparent 30%
            ),
            radial-gradient(
                circle at 85% 70%,
                rgba(120,110,255,0.30),
                transparent 35%
            ),
            linear-gradient(
                135deg,
                #101d38,
                #173d55,
                #26395c
            )
        `,


        autumn: `
            radial-gradient(
                circle at 20% 20%,
                rgba(255,150,70,0.40),
                transparent 30%
            ),
            radial-gradient(
                circle at 85% 70%,
                rgba(180,70,50,0.30),
                transparent 35%
            ),
            linear-gradient(
                135deg,
                #351819,
                #5b2721,
                #8a4927
            )
        `
    };


    document.body.style.background =
        themes[season];

}


/* ---------- BUTTON ---------- */

discoverButton.addEventListener(
    "click",
    findSeason
);


/* ---------- ENTER KEY ---------- */

monthInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            findSeason();

        }

    }
);


/* ---------- INITIAL THEME ---------- */

setSeasonTheme("default");
