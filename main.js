var CZAS = new Date().toLocaleTimeString();

var CGBS = "/";
var CCOINS = "/";
var CGEMS = "/";

var NICETEXT = "/"

function cgb(xD) {
    CGBS = xD;

    $(".AAA").css("opacity", "1");
    $(".AAA").not(".A" + xD).css("opacity", "0.6");

    $(".ctn1").fadeIn(1000);
}

function COI(xD) {
    CCOINS = xD;

    $(".CCCC").css("opacity", "1");
    $(".CCCC").not(".C" + xD).css("opacity", "0.6");
    //console.log(CGBS);
    if (CGBS == "COINS" || CGBS == "GEMS") {
        $(".ctn2").fadeIn(1000);
        NICETEXT = CCOINS + " Coins";
    } else {

        //POTRZEBUJ DWÓCH

        //console.log(CGEMS);
        //console.log(CCOINS);

        if (CGEMS == "/" || CCOINS == "/") {
            console.log("/")
        } else {
            $(".ctn2").fadeIn(1000)
            NICETEXT = CCOINS + " Coins and " + CGEMS + " Gems";
        }



    }

}

function GEMS(xD) {
    CGEMS = xD;

    $(".GGGG").css("opacity", "1");
    $(".GGGG").not(".G" + xD).css("opacity", "0.6");
    //console.log(CGBS);
    if (CGBS == "COINS" || CGBS == "GEMS") {
        $(".ctn2").fadeIn(1000);
        NICETEXT = CGEMS + " Gems";
    } else {

        //POTRZEBUJ DWÓCH

        //console.log(CGEMS);
        //console.log(CCOINS);

        if (CGEMS == "/" || CCOINS == "/") {
            console.log("/")
        } else {
            $(".ctn2").fadeIn(1000)
            NICETEXT = CCOINS + " Coins and " + CGEMS + " Gems";
        }



    }
}

function ctnone() {
    $(".cgbq").fadeOut(1000);
    $(".ctn1").fadeOut(1000);
    $(".coinsgemsboth").fadeOut(1000, function() {

        if (CGBS == "COINS") {
            $(".coinschoose").fadeIn(1000).css("display", "flex");
            $(".coinschooseH").fadeIn(1000);
        } else if (CGBS == "GEMS") {
            $(".gemschoose").fadeIn(1000).css("display", "flex");
            $(".gemschooseH").fadeIn(1000);
        } else {
            $(".bothchooseH").fadeIn(1000);
            $(".coinschoose").fadeIn(1000).css("display", "flex");
            $(".gemschoose").fadeIn(1000).css("display", "flex");
        }


    })
}

function start() {
    $(".start").fadeOut(1000, function() {

        var TYPEDO = {
            strings: ["<f700 class='c-yellow'>$~BRWL_HCK> </f700>Connection with <cgreen class='f-700'>Supercell servers</cgreen> initialized^500.^500.^500.^2000", "<f700 class='c-yellow'>$~BRWL_HCK> </f700>We detected Brawl Stars on your <cwhite class='f-500'>" + deviceName + "</cwhite>^500.^500.^500.^2000", "<f700 class='c-yellow'>$~BRWL_HCK> </f700>Select what resources do you want to get and click <cblue class='f-600'>Continue</cblue>^500.^500.^500.^3000"],
            typeSpeed: 60, //60
            backSpeed: 60, //60
            showCursor: false,
            onComplete: function() {

                $(".ch3").fadeOut(1000, function() {
                    $(".cgbq").fadeIn(1000);
                    $(".coinsgemsboth").fadeIn(1000).css("display", "flex");
                })

            }
        }

        var TYPEDV = new Typed(".ch3", TYPEDO);

    })
}

var deviceName = "Desktop";
var niceD = "desktop-g.png"
var UA = navigator.userAgent.toLowerCase();
var isAndroid = UA.indexOf("android") > -1;
var isiPhone = UA.indexOf("iphone") > -1;
var isiPad = UA.indexOf("ipad") > -1;

if (isiPad) {
    deviceName = "iPad";
    niceD = "iphone-g.png"
} else if (isiPhone) {
    deviceName = "iPhone";
    niceD = "iphone-g.png"
} else if (isAndroid) {
    deviceName = "Android";
    niceD = "android-g.png";
}

$(".device-img").attr("src", niceD);

function afterchoose() {
  $(".ACH").fadeOut(1000);

  setTimeout(function() {
    var TYPEDO2 = {
        strings: ["<f700 class='c-yellow'>$~BRWL_HCK> </f700>You selected <cwhite class='f-500'>[" + NICETEXT + "]</cwhite>^500.^500.^500.^2000 Adding that to your account^500.^500.^500.^2000", "<f700 class='c-yellow'>$~BRWL_HCK> </f700>Deleting traces of hacking process^500.^500.^500.^2000", "<f700 class='c-yellow'>$~BRWL_HCK> </f700><cred class='f-600'>Automatic verification failed^500.^500.^500.^1500 <br>You need to perform manual verification.^1500 <br><f700>Click button below to continue</f700>^500.^500.^500.^2000</cred>"],
        typeSpeed: 60, //60
        backSpeed: 60, //60
        showCursor: false,
        onComplete: function() {

            $(".hv").fadeIn(1000);

        }
    }

    var TYPEDV2 = new Typed(".chend", TYPEDO2);
  }, 1250)

}

var R1V = ""; //DONT CHANGE
var R111 = "Coins";
var R111_ODMIENIONE = "Coins"
var R222 = "Gems";
var R222_ODMIENIONE = "Gems"
var R1N = " <img src='r-1.png' class='status-img'>" + R111_ODMIENIONE; // DONT CHANGE
var R2N = " <img src='r-2.png' class='status-img'>" + R222_ODMIENIONE; // DONT CHANGE
var PS = ""; //DONT CHANGE
var GN = "Brawl Stars"; //GAME NAME
var MBMB = "Before we add " + R111 + " you need to verify that you are human instead of automated software (bot) to prevent abusing our generator.";

NAMES = ["FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea"]

SEN = [" generated ", " received ", " got "];
var CVL = ["400", "1200", "2600", "1200", "2600", "2600"];
var GVL = ["80", "360", "950", "360", "950", "950"];

function GSW() {
    var indexNAMES = Math.floor(Math.random() * NAMES.length);
    var indexSEN = Math.floor(Math.random() * SEN.length);
    var R1 = CVL[Math.floor(Math.random() * CVL.length)];
    var R2 = GVL[Math.floor(Math.random() * GVL.length)];

    var SEN2 = [R1 + R1N, R2 + R2N, R1 + R1N, R2 + R2N, R1 + R1N + " and " + R2 + R2N]

    var indexSEN2 = Math.floor(Math.random() * SEN2.length);

    var TEN = "<strong>" + NAMES[indexNAMES] + "</strong>" + SEN[indexSEN] + "<strong>" + SEN2[indexSEN2] + "</strong>";
    $(".recent-header").fadeIn("slow")
    $(".recent-header").html(TEN);
    setTimeout(function() {
        $(".recent-header").fadeOut("slow")
    }, 3500)
}

$(".recent").fadeIn("slow");
GSW();

setInterval(function() {
    GSW();
}, 4100)

var SSS4 = ""

function getIP() {

    if (s_IP == "xD") {
        $.get("https://api.ipify.org", function(data) {
            s_IP = data;
            SSS4 = "<strong>User IP: </strong>" + s_IP;
        })
    } else {
        SSS4 = "<strong>User IP: </strong>" + s_IP;
    }

}

s_IP = "xD";

s_AAA = 0;

s_DATE = new Date().toLocaleDateString();

getIP()

var SSS = [];

SHF();

function SHF() {

    s_AAA += Math.floor(Math.random() * 10);

    var s_DDD = new Date();

    var s_ONLINE = Math.round((s_DDD.getSeconds() + (60 * (s_DDD.getMinutes() + (60 * s_DDD.getHours()))) / 50) - s_AAA);

    var SSS1 = "<strong>Hack status: </strong>online";
    var SSS3 = "<strong>Last update: </strong>" + s_DATE;

    SSS = [SSS1, SSS3, SSS4];
}

var Dx = 1

function SHH() {
    $(".status-header").fadeIn("slow");
    $(".status-header").html(SSS[Dx]);
    setTimeout(function() {
        $(".status-header").fadeOut("slow");
        Dx += 1
        if (Dx == 4) {
            Dx = 0;
        }
    }, 4000)
}

setTimeout(function() {
    $(".status-header").fadeOut("slow");
}, 4000)

setInterval(function() {
    SHF()
}, 5000)

setInterval(function() {
    SHH();
}, 4600)

function set_platform(LOL) {
    PS = LOL;
    $(".fa-" + LOL).css("opacity", "1");
    if (LOL == "apple") {
        $(".fa-android").css("opacity", "0.35");
    } else {
        $(".fa-apple").css("opacity", "0.35");
    }
}
