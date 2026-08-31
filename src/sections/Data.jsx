import { useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion';
import { useMediaQuery } from '../Utilities.jsx';

import './sections.css';

function Data(){

    const data = {

        home: Home,
        programming: Programming,
        projectsReactAndBot: ProjectsReactAndBot,
        projectsCPlusPlus: ProjectsCPlusPlus,
        languages: Languages,
        music: Music,
        workPhilosophyAndEthics: WorkPhilosophyAndEthics,
        learningRightNow: LearningRightNow,
        futureGoals: FutureGoals,
        contact: Contact,
        quotes: Quotes,
        booksAndEntertainment: BooksAndEntertainment,
        thanks: Thanks,

    }
    
    return data;

}

const Home = ({isVisible}) => { //Introducion

    let aux = isVisible == "home";

    return (
            <motion.div 
                key="transicionMenu"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: aux ? 1 : 0.5 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className='data' id='home'>
                <h1>Hi! I'm Mauricio.</h1>
                <p>I'm studying Computer Science, and eager to keep learning and applying my knowledge.</p>
                <p>Be it web development, mobile apps, or data science, I'm always excited to take on new challenges and push my knowledge and capabilities.</p>
                <p>And my seed for knowledge extends beyond the digital realm and overflows into music, languages, etc.</p>
            </motion.div>
    )
}

const Programming = ({isVisible}) => { // Technologies I know / have worked with
    
    let aux = isVisible == "programming";

    return (

        <div className='data' id='programming'>
            <p>
                I've been studying for 3 years on the <strong>Central University of Venezuela (CUV)</strong>, during which time I've built a strong foundation on Computer Logic, across multiple languages, paradigms, and methodologies.
            </p>
                <motion.ul
                    key="transitionProgramming"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: aux ? 1 : 0 }}
                    exit={{ opacity: 0.1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <li>
                        I've used <strong>C++</strong> to study classic algorithms and paradigms 
                        of programming and computer science, as well as fundamental concepts of <strong>Memory Management</strong>, <strong>Graphical Computing</strong>,
                        and <strong>System Programming and Algorithmic Development</strong>, being my most used and more skillful language.
                    </li>
                    <li>
                        With <strong>Java</strong> I've explored and am familiar with concurrent programming paradigms and applied development methodologies like <strong>Waterfall, RUP, and XP</strong>.
                    </li>
                    <li>
                        I utilized and have experience with<strong> Python</strong> for scientific computing (linear algebra, matrix factorization), as well as <strong>Backend</strong> logic using <strong>WSGI</strong>.
                    </li>
                    <li>
                        I've used <strong>JavaScript</strong> to work with <strong>FrontEnd Development</strong> and have experience with it.
                    </li>
                    <li>
                        I've learned the basics of <strong>Functional Programming</strong> using <strong>Haskell</strong> to solve computational problems such as <strong>Breadth-First Search</strong>, being accustomed to the language.
                    </li>
                    <li>
                        I am familiar with and used <strong>Prolog</strong> to study the mechanism of <strong>Logical Programming</strong> and solving classic computer science algorithms.
                    </li>
                </motion.ul>
        </div>

    )
}

const ProjectsReactAndBot = ({isVisible}) => { //Prohects I've done in React as well as any opther JavaScript related thing and the MedBot
    
    let aux = isVisible == "projectsReactAndBot";

    const isMobile = useMediaQuery('(max-width: 1690px)');

    return (
        <div className='data' id='ProjectsReactAndBot'>
            <p>I've learned and worked with React, and have made projects for myself and for others.</p>
            <div id='projectsGrid'>
                {(!isMobile) && (<motion.span id='taskManager'
                    key="transitionReact1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: aux ? 1 : 0 }}
                    exit={{ opacity: 0.1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <h3>Task Manager</h3>
                    <p>
                        A fully functional to-do list built with <strong>React</strong> and <strong>Vite</strong> in my first working project. 
                        It features task creation, editing, filtering, reordering, and persistence in the local browser. <a href='https://github.com/Zaroc2/ReactFirstProject' target='_blank'>Check it out</a>
                    </p>
                    <img src='./images/taskManager.png' alt='A Screenshot of a Task Manager in the browser made by me'></img>
                </motion.span>)}
                <motion.span id='teleBot'
                    key="transitionReact2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: aux ? 1 : 0 }}
                    exit={{ opacity: 0.1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <h3>Telegram Bot For Medicaments</h3>
                    <p>
                        During the <strong>Venezuela earthquake on July 24, 2026</strong>, a colleague and I built a 
                        Telegram bot that parses and stores medication data arriving at the UCV collection center 
                        in a <strong>Supabase</strong> database, with the first working version in under 24h. <a href='https://github.com/Zaroc2/teleBot' target='_blank'>Check it out</a>
                    </p>
                    <img src='./images/teleBot.png' alt='A Screenshot of a Telegram chat with the Bot in the browser'></img>
                </motion.span>
                <motion.span id='movieSearcher'
                    key="transitionReact3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: aux ? 1 : 0 }}
                    exit={{ opacity: 0.1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <h3>Movie Searcher</h3>
                    <p>
                        A React app that consumes the <strong>OMDb API</strong> to search for movies using asynchronous calls. 
                        It includes pagination, loading states, error handling, and a smooth user experience. <a href='https://github.com/Zaroc2/ReactSecondProject' target='_blank'>Check it out</a>
                    </p>
                    <img src='./gifs/movieSearcher.gif' alt='A Screenshot of the Movie Searcher in the browser made by me'></img>
                </motion.span>
            </div>
        </div>
    )
    
}

const ProjectsCPlusPlus = ({isVisible}) => { //Projects in C++

    let aux = isVisible == "projectsCPlusPlus";

    return (
        <>
         <div className="data" id="ProjectsCPlusPlus">
            <h2>I've worked with C++ the most, some of my projects are:</h2>
            <ul>
                <li id='Minesweeper'>
                    <motion.p
                        key="projectsCpp1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: aux ? 1 : 0 }}
                        exit={{ opacity: 0.1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}>
                        Even before my admission to the CUV I was already developing projects from my own personal interest, such as a Minesweeper made
                        using <strong>Graphic Libraries</strong> such as <strong><a href='https://www.sfml-dev.org/' target='_blank'>SFML</a> for Graphics and Event Handling</strong>
                        <br></br>
                        {/*<a href='https://github.com/Zaroc2/Minesweeper'>Check it out!</a> */}
                    </motion.p>
                    <img src='./gifs/minesweeper.gif' alt='A gif of a Minesweeper made by me using C++ and SFML'></img>
                </li>
                <li id='Stairs'>
                    <img src='./gifs/stairs.gif' alt='A gif of the ScreenSaver program made by me, with different shapes of different colors'></img>
                    <motion.p
                        key="projectsCpp2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: aux ? 1 : 0 }}
                        exit={{ opacity: 0.1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}>
                        While studying <strong>Data Structures</strong> I made with SFML a project that generates geometric 
                        figures (from triangles to undecagons and circles) that grow and are replaced in a handwritten <strong>queue</strong>, working as a visual
                        experiencie with music and flashy colors.
                        <br></br>
                        {/*<a href='https://github.com/Zaroc2/Stairs'>Check it out!</a>*/}
                    </motion.p>
                </li>
               <li id='Graphics'>
                    <motion.p
                        key="projectsCpp3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: aux ? 1 : 0 }}
                        exit={{ opacity: 0.1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}>
                        During my time studying Graphical Computing, I implemented using <strong>C++20</strong>, <strong>OpenGL 3.3</strong> and <strong>GLFW </strong> 
                        a <strong>Graphics Engine</strong> to draw lines, circles, ellipses, polygons and <strong>Bezier curves</strong>, using an user interface made with <strong>ImGUI</strong> and organizes them in a <strong>QuadTree</strong>, in a modular, organized and documented code.
                    <br></br>
                    <a href='https://github.com/Zaroc2/proyecto-1-graficas' target='_blank'>Check it out!</a>
                    </motion.p>
                    <img src='./gifs/graphics.gif' alt='A gif of the Graphics Engine made by me, showing the drawing of a cookie'></img>
               </li>
            </ul>
        </div>
        </>
    )

}

const Languages = ({isVisible}) => { // My Interest in Languages

    let aux = isVisible == "languages";

    return (
        <>
        <div className="data" id="Languages">
            <h2>My Language Journey</h2>
            <motion.div id='languageStory'
                key="transitionLanguage1"
                initial={{ opacity: 0 }}
                animate={{ opacity: aux ? 1 : 0 }}
                exit={{ opacity: 0.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}>
                <p>I was born in a <strong>Spanish-speaking</strong> country, and have a love for the language, 
                    as I enjoy reading, riddles, tongue twisters and cleverness in the use of the language.</p>
                <p>However, my love for spanish isn't limited to spanish alone, for I've been practicing
                    <strong> English</strong> for about <strong>7 years</strong> now, and would consider myself 
                     to have a good understanding and skill of the language, be it speaking, writing or reading.
                </p>
                <p>Even then, my learning curve in English has flattened somewhat over the years, 
                    not because I have become a master of the language, but rather because the learning opportunities have become more scarce, so I recently
                    decided to embark on a <strong>new</strong> learning journey towards <strong>French</strong>, which, despite being another romance language, is a beautiful and 
                    interesting tongue that I'd like to speak someday as I do Spanish or English.
                </p>
            </motion.div>
            <motion.div id='languageList'
                key="transitionLanguage2"
                initial={{ opacity: 0 }}
                animate={{ opacity: aux ? 1 : 0 }}
                exit={{ opacity: 0.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}>
                <p>Had I to classify myself, it would be:</p>
                <ul>
                    <li>Spanish - <strong>Native</strong></li>
                    <li>English - <strong>B2/C1</strong></li>
                    <li>French - <strong>A1</strong></li>
                </ul>
            </motion.div>
        </div>
        </>
    )

}

const Music = ({isVisible}) => {
    
    let aux = isVisible == "music";
    const isMobileSmaller = useMediaQuery('(max-width: 950px)');

    return (
        <div className='data' id='Music'>
            <h2>Musically Inclined <sub>(If the piano didn't give it away)</sub></h2>
            <motion.div id='musicStory'
                key="transitionMusic"
                initial={{ opacity: 0 }}
                animate={{ opacity: aux ? 1 : 0 }}
                exit={{ opacity: 0.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}>
                <span id='music1'>
                    <p>
                        I've liked music for most of my life, and I've been trying to express myself through <strong>piano and guitar</strong> for 
                        about <strong>5 years</strong> now, learning, although I am still not the greatest player, I'm good enough to enjoy myself.

                        {(isMobileSmaller)&&(<><br></br>I even made a <strong>simple project</strong> (although really wonky) 
                                for my personal use in order to practice sight reading.</>)}
                    </p>
                </span>
                {(!isMobileSmaller)&&(<p id='music2'>
                    However, one of the things that have always driven my passion for music is understanding it, the harmony, the rhythm, the <strong>music theory </strong>
                    that has evolved throughout History (Or at least the <strong>Western</strong> side, which is the most popular nowadays).

                    That has led me to <strong>study</strong> music as well, and I have been doing so for the past 3 years, I even made a <strong>simple project</strong> (although really wonky) 
                    for my personal use in order to practice sight reading.
                </p>)}
                <img src='./gifs/sightReading.gif' alt='A gif of a program I made using C++ and SFML to help me practice Sight Reading'></img>
                <div id='musicAudios'>
                    <p>Some couple things I've done :p</p>
                    <audio  onLoadedMetadata={(e) => e.target.volume = 0.5} controls>
                        Sadly, your browser doesn't support audio
                        <source src="./sounds/im_sad.mp3" type="audio/mpeg"></source>
                    </audio>
                    <audio  onLoadedMetadata={(e) => e.target.volume = 0.5} controls>
                        Sadly, your browser doesn't support audio
                        This is a cover of 'Necesito una mujer' by El Cuarteto de Nos
                        <source src="./sounds/Necesito_una_salsa.mp3" type="audio/mpeg"></source>
                    </audio>
                    <audio  onLoadedMetadata={(e) => e.target.volume = 0.5} controls>
                        Sadly, your browser doesn't support audio
                        <source src="./sounds/saray.mp3" type="audio/mpeg"></source>
                    </audio>
                </div>
                <p id='music3'>
                    While I do not have a strict genre preference, I do find myself more inclined to rock and caribbean rhythms, but specially, to songs
                    that provide content or stories in its lyrics. For that reason one of my favorite bands is <strong><a href='https://cuartetodenos.com.uy/' target='_blank'>El Cuarteto de Nos</a></strong>, which 
                    over their most popular albums discuss themes and subjects that have impact and something to tell.
                </p>
            </motion.div>
        </div>
    )
}

const WorkPhilosophyAndEthics = ({isVisible}) => {
    
    let aux = isVisible === "workPhilosophyAndEthics";

    return (
        <div className="data" id="WorkPhilosophyAndEthics">
            <h2>About how I work...</h2>
            <motion.div 
                id="philosophyContainer"
                key="transitionPhilosophy"
                initial={{ opacity: 0 }}
                animate={{ opacity: aux ? 1 : 0 }}
                exit={{ opacity: 0.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="wpaeCard">
                    <p>
                        My approach to work mirrors my approach to life: <strong>break any problem down 
                        into its core elements</strong> and tackle each one individually. 
                        I always start a project by organizing as much as I can to avoid technical debt and/or confusion later down the road. 
                        Even then, there are times in which one has to prioritize <strong>effectiveness over efficiency</strong>, knowing when
                        to make that trade-off is important, and I try to abide by them if I have to.
                    </p>
                </div>

                <div className="wpaeCard">
                    <p>
                        In university and in life, I've learned to adapt to different team dynamics. 
                        I can <strong>lead when my skills or knowledge are needed</strong>, and I can 
                        just as easily <strong>step back and try my best to excel in my assigned role</strong> when 
                        someone else is better suited to guide the team. I value clear communication and prioritize it over almost everything 
                        for one cannot build trust, respect, or work without communication.
                    </p>
                </div>

                <div className="wpaeCard">
                    <p>
                        What matters most to me is <strong>building things that have a positive impact</strong> on someone in one way or another.
                        I actively seek out <strong>feedback</strong> and try as best as I can to learn not only from my mistakes but
                        the experience from other people. I also despise doomscrolling or the likes, and although I am no wise old monk,
                        I do try to keep learning—reading, studying, and having meaningful conversations with others, while always being <strong>mindful of 
                        where knowledge comes from</strong> and evaluating it critically.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

const LearningRightNow = ({isVisible}) => {
    
    let aux = isVisible === "learningRightNow";

    return (
        <div className="data" id="LearningRightNow">
            <h2>What I'm Learning Right Now</h2>
            <motion.div 
                id="learningContainer"
                key="transitionLearning"
                initial={{ opacity: 0 }}
                animate={{ opacity: aux ? 1 : 0 }}
                exit={{ opacity: 0.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div id="learningIntro">
                    <p>
                        As I said before, I'm still learning French, and I am studying music, those are two most notable things
                        going on right now for me, however they're not the only ones.
                    </p>
                </div>
                <div id="learningLocution">
                    <h3>Voice-Over & Locution</h3>
                    <p>
                        I'm also taking a <strong>voice-over and locution course</strong> to improve 
                        my speaking skills, diction, and sound when communicating. My love for languages isn't only
                        in learning them, but also in using them to <strong>communicate a message</strong>.
                    </p>
                    {/*
                    Esto para cuando algo que poner pq por ahora no tengo nada para hablar
                    <audio onLoadedMetadata={(e) => e.target.volume = 0.5} controls>
                        Unfortunately, you can't hear my voice cuz your browser doesn't support it
                        <source src="./sounds/learningRightNow.mp3" type="audio/mpeg"></source>
                    </audio>
                    */}
                </div>
                <div id="learningMagic">
                    <h3>Magic</h3>
                    <p>
                        And as for entertainment, I've been getting into <strong>magic</strong>, not to become a professional, 
                        but because it's a great way to <strong>socialize and connect with people</strong>. 
                    </p>
                    <img src='./gifs/magic.gif' alt='A gif of me doing a simple magic trick of an swapping card'></img>
                </div>
                <div id="learningHistory">
                    <h3>Universal History</h3>
                    <p>
                        I'm currently studying <strong>universal history</strong>, I've always wanted to
                        try my shot at understanding global events and ideas right now, and for that I need and want to
                        <strong> understand global events and ideas from the past</strong>, so I can look into the future.
                        I hope it can make it easier to try to grasp knowledge about where we come from and why things are the 
                        way they are today. And I don't reject the idea of maybe pursuing a career of Philosophy and History in the future.
                    </p>
                    {/*<img src='https://picsum.photos/400/200?random=8'></img>*/}
                </div>
            </motion.div>
        </div>
    );
};

const FutureGoals = ({isVisible}) => {
    
    let aux = isVisible === "futureGoals";

    return (
        <div className="data" id="FutureGoals">
            <h2>Where I'd like to be <sub>(and hopefully will)</sub></h2>
            <motion.div 
                id="goalsContainer"
                key="transitionGoals"
                initial={{ opacity: 0 }}
                animate={{ opacity: aux ? 1 : 0 }}
                exit={{ opacity: 0.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="goals-grid">
                    <div className="goal-card">
                        <p>
                            I want to become a <strong>professional developer</strong> with a degree from the CUV
                            and a specialization in <strong>Artificial Intelligence</strong>. I aim to 
                            be capable of building <strong>any kind of project I set my mind to</strong>, whether for 
                            myself, for a company, or for the community. I'm particularly drawn to 
                            <strong> startups, open source</strong>, or corporate roles where I can 
                            bring <strong>ideas to the table</strong>. But what I'd love the most is to 
                            build applications that have a <strong>real impact</strong> on at least one person, hopefully 
                            more than one.
                        </p>
                    </div>

                    <div className="goal-card">
                        <p>
                            Beyond code, I dream of becoming a full-fledged <strong>polyglot</strong>, I'd like to learn
                            another language, maybe not a romance one this time, and I also hope to graduate in music,
                            be able to understand it more and compose naturally, maybe even form a small 
                            <strong> musical group</strong> to play with friends. Growth isn't just about technical skills, 
                            but also about becoming a more <strong> thoughtful, creative, and happy</strong> individual.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Contact = ({isVisible}) => {
    
    let aux = isVisible === "contact";

    return (
        <div className="data" id="contact">
            <h2>Contact me</h2>
            <motion.div 
                id="contactContainer"
                key="transitionContact"
                initial={{ opacity: 0 }}
                animate={{ opacity: aux ? 1 : 0 }}
                exit={{ opacity: 0.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >

                <ul>
                    <li>
                        Here's my <a href="./resume.pdf" target='_blank'>Resume</a>
                    </li>
                    <li>
                        Check my <a href='https://www.linkedin.com/in/mauricio-gonz%C3%A1lez-010793430' target='_blank'>LinkedIn</a>
                    </li>
                    <li>
                        Check my projects on <a href="https://github.com/Zaroc2" target="_blank">GitHub</a>
                    </li>
                    {/* For when I actually have a Twitter
                     <li>
                        I don't really use it, but here's my <a href='https://x.com' target='_blank'>X</a>
                    </li>
                     */}
                    <li>
                        Email me to <a onClick={
                            (e) => {
                            e.preventDefault(); /*Esto es para evitar q sea muy facil hacer scraping con un bot a mi correo*/
                            let correo = 'mauriciogonzalez1256' + '@' + 'gmail' + '.' + 'com';
                            correo = 'mailto:' + correo;
                            window.location.href = correo;} 
                        }>mauriciogonzalez1256 [@] gmail [dot] com</a>
                    </li>
                </ul>
                    <p>
                        You can contact me for whatever, music, languages, development, don't be a stranger :)
                    </p>
            </motion.div>
        </div>
    );
};

//Not sure, could be mentoring, experiencia de enseñanza, community pero no he participado en cosas de comunidad, quiza el hackathon o libros que me han interesado

const Quotes = ({isVisible}) => {

    let aux = isVisible === "quotes";

    const isMobile = useMediaQuery('(max-width: 1690px)');
    const isMobileSmaller = useMediaQuery('(max-width: 950px)');

    return (
        <div className="data" id="quotes">
            <h2>Quotes I like</h2>
            <motion.div 
                id="quotesContainer"
                key="transitionQuotes"
                initial={{ opacity: 0 }}
                animate={{ opacity: aux ? 1 : 0 }}
                exit={{ opacity: 0.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <p id="quotesIntro">
                    These are some quotes that I like, I wouldn't say the define or anything, but I like them. 
                    <sub> (And to come clean with you... I needed 12 sections for the piano to look good)</sub>
                </p>
                <div id="quotesGrid">
                    <div className="quoteCard" id='MM'>
                        <blockquote>
                            {/*“La vida hay que vivirla, que es para lo único que sirve”*/}
                            "Life is to be lived, for that's the only thing it's worth for"
                        </blockquote>
                        <cite>Lecture by Marcos Mundstock, VIII International Congress of the Spanish Language.</cite>
                    </div>
                    {(!isMobileSmaller)&&(<div className="quoteCard" id='BS'>
                        <blockquote>
                            {/*“Escribo estas palabras en acero, pues todo lo que no esté grabado en metal es indigno de confianza.”*/}
                            "I write these words in steel, for anything not set in metal cannot be trusted."
                        </blockquote>
                        <cite>— Kwaan (Brandon Sanderson, <em>Elantris</em>)</cite>
                    </div>)}
                    <div className="quoteCard" id='Mm'>
                        <blockquote>
                            {/*“En la vida hay dos tipos de problemas, los tuyos y los míos, y ése no es problema mío”*/}
                            "There are two kinds of problems in life: yours and mine, and that's not my problem"
                        </blockquote>
                        <cite>— My Mother</cite>
                    </div>
                    {(!isMobileSmaller)&&(<div className="quoteCard" id='WP'>
                        <blockquote>
                            {/*“La muerte es como un viaje, similar al que realizan dos amigos al separarse para atravesar los mares…”*/}
                            "Death is but crossing the world, as friends do the seas; they live in one another still."
                        </blockquote>
                        <cite>— William Penn, <em>More Fruits of Solitude</em></cite>
                    </div>)}
                    <div className="quoteCard" id='RG'>
                        <blockquote>
                            {/*“Dos cosas hay en el mundo / Que no sirven para viajar / La plata por lo que pesa / Y el no quererla gastar” */}
                            "Two things in this world are useless for a journey: money because it's heavy, and the reluctance to spend it."
                        </blockquote>
                        <cite>— Florentino Quitapesares (Rómulo Gallegos, <em>Cantaclaro</em>)</cite>
                    </div>
                    {/* 
                    <div className="quoteCard" id='MC'>
                        <blockquote>
                            “Ésa es condición natural de mujeres —dijo Don Quijote—, desdeñar a quien las quiere y amar a quien las aborrece.”
                        </blockquote>
                        <cite>— Don Quijote (Miguel de Cervantes Saavedra, <em>Don Quijote de la Mancha</em>)</cite>
                    </div>
                    */}
                    {(isMobile) &&
                    (<div className="quoteCard" id='SK'>
                        <blockquote>
                            {/*“No hay solaz sin dolor; así pues, concebimos la salvación mediante el sufrimiento”*/}
                            "There is no comfort without pain; thus we define salvation through suffering."
                        </blockquote>
                        <cite>— <em>Stephen King, The Breathing Method (Fall / Winter)</em></cite>
                    </div>)
                     }
                    {(!isMobile) &&(<div className="quoteCard" id='EW'>
                        <blockquote>
                            “Why am I fighting to live if I'm just living to fight? / Why am I trying to see when there ain't nothing in sight? / Why am I trying to give when no one gives me a try? / Why am I dying to live if I'm just living to die?”
                        </blockquote>
                        <cite>— Edgar Winter, <em>“Dying to Live”</em> (1971)</cite>
                    </div>)}
                </div>
            </motion.div>
        </div>
    );
};

const BooksAndEntertainment = ({isVisible}) => {
    
    let aux = isVisible === "booksAndEntertainment";

    const isMobile = useMediaQuery('(max-width: 1690px)');
    const isMobileSmaller = useMediaQuery('(max-width: 950px)');

    return (
        <div className="data" id="booksAndEntertainment">
            <motion.div 
                id="entertainmentContainer"
                key="transitionEntertainment"
                initial={{ opacity: 0 }}
                animate={{ opacity: aux ? 1 : 0 }}
                exit={{ opacity: 0.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                <h2>When I'm bored...</h2>
                {/* Introducción: qué hago cuando estoy aburrido */}
                <div id="entertainmentIntro">
                    <p>
                        I'll usually be watching YouTube, reading, playing piano or guitar, listening to music, or coding.
                        Maybe even <strong>more than one</strong> at the same time (Learning a song on youtube... coding with music, etc).
                        {/*In mobile is too much*/(!isMobile)&&(<><br></br><br></br>
                        I may be trying to compose a piece... or trying to finish a book, or maybe even be programming a pong game on console
                        using a library like <strong>conio.h</strong> which is clearly not intended for pong, but capable of doing it.</>)}
                    </p>
                    <img src='./gifs/pong.gif' alt='A gif of a pong game I made in console using conio.h'></img>
                    <p><sub>{isMobile ? (<>A pong made in console once cus'... bored</>) : (<>The Pong is not a joke...</>)}</sub></p>
                </div>

                <div id='entertainmentBooks'>
                    <p>
                        I'm currently reading <strong><em>Don Quixote</em></strong>, from <em>Miguel de Cervantes</em>, a staple in spanish literature{(!isMobileSmaller)&&(<>, and before that I had
                        read <strong><em>The Odyssey</em></strong> (before I knew there was a movie being produced, so good timing)</>)}, however, I'll probable be reading something 
                        lighter before, and I have my eye fixed on <strong><em>The Breath of The Gods</em></strong> by <em>Brandon Sanderson</em>, as I am fantasy fan. 
                        <sub>A fanfantasy... as some might say</sub>
                    </p>
                    <div id='bookList'>
                        Some of my favorite books are:
                        <ul>
                            <li><strong>Harry Potter</strong> – J.K. Rowling</li>
                            <li><strong>Elantris</strong> – Brandon Sanderson</li>
                            <li><strong>1984</strong> – George Orwell</li>
                        </ul>
                    </div>
                </div>

                <div id='entertainmentMusic'>
                    <p>
                        When it comes to music, I do have a <strong>1800+ songs</strong> playlist with a lot... of variety, but as of right now 
                        I'm really rediscovering and enjoying the <strong><em>Out of The Blue</em></strong> album by <em>Electric Ligth Orchestra</em>, a fantastic piece of work.
                    </p>
                    <iframe data-testid="embed-iframe" style={{borderRadius: '12px', overflow: 'hidden'}} 
                    src="https://open.spotify.com/embed/album/3usnShwygMXVZB4IV5dwnU?utm_source=generator&si=69f51eb975d4449a" 
                    width={isMobile ? '80%' : '100%'} height={isMobile ? '80' : '352'} frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; 
                    fullscreen; picture-in-picture" loading="lazy" title="Spotify player for Out of the Blue album by Electric Light Orchestra"></iframe>
                    <p>If you wanna give it a go ;)</p>
                </div>
            </motion.div>
        </div>
    );
};

const Thanks = ({isVisible}) => {

    return (
        <div className='data' id='FillerData'>
            <h1>Thank you ;)</h1>
        </div>
    )
}

export const displayPianoNames = {
    home: 'Home',
    programming: 'Programming',
    projectsReactAndBot: 'React',
    projectsCPlusPlus: 'C++',
    languages: 'Languages',
    music: 'Music',
    workPhilosophyAndEthics: 'Philosophy',
    learningRightNow: 'Learning',
    futureGoals: 'Goals',
    contact: 'Contact',
    quotes: 'Quotes',
    booksAndEntertainment: 'Books',
    thanks: 'Thanks'
}

export default Data
