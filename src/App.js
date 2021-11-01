import { gsap, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const parallaxTatooine = useRef(null);
    const parallaxPalace = useRef(null);

    useEffect(() => {
        const tl1 = gsap.timeline({scrollTrigger: {
            trigger: '.parallax-tatooine',
            end: 'bottom center',
            pin: true,
            scrub: 1
        }})
            .from('.layer-1-1', {y: '-18%'})
            .from('.layer-1-2', {y: '-6%'}, '-=.5')
            .from('.layer-1-3', {y: '-3%'}, '-=.5')

        const tl2 = gsap.timeline({scrollTrigger: {
            trigger: '.parallax-palace',
            end: 'bottom center',
            pin: true,
            scrub: 1
        }})
            .from('.layer-2-1', {y: '-6%'})
            .from('.layer-2-2', {y: '-3%'}, '-=.5')
    }, [])

    return (
        <div className='App'>
            <div className='parallax parallax-tatooine' ref={parallaxTatooine}>
                <div className='layer layer-1-1'></div>
                <div className='layer layer-1-2'></div>
                <div className='layer layer-1-3'></div>
                <div className='layer layer-1-4'></div>
            </div>
            <div className='content content-tatooine'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='title title-tatooine'>Tatooine</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='quote quote-tatooine'>"Well, if there's a bright center to the universe, you're on the planet that it's farthest from."<br/>―Luke Skywalker, to C-3PO</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <p className='text text-tatooine'>Tatooine was a sparsely inhabited circumbinary desert planet located in the galaxy's Outer Rim Territories. It was the homeworld of Anakin and Luke Skywalker, who would go on to shape galactic history. Part of a binary star system, the planet was oppressed by scorching suns, resulting in the world lacking the necessary surface water to sustain large populations. As a result, many residents of the planet instead drew water from the atmosphere via moisture farms. The planet also had little surface vegetation.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-0 col-md-6'></div>
                        <div className='col-12 col-md-6'>
                            <p className='text text-tatooine text-right'>Initially inhabited by native Jawa and Tusken Raider species, it saw a population explosion following the search for valuable mining deposits on the planet's silicate surface. Finding the ore to have unwanted metallurgic properties, mining firms left the planet en masse, leaving behind valuable equipment, most notably large sandcrawlers, which were later used by the Jawa population.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <p className='text text-tatooine'>The Hutt Clan also maintained a presence on Tatooine, with Jabba the Hutt owning a palace in the desert at least by the time of the Clone Wars until his death shortly before the Battle of Endor.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-0 col-md-6'></div>
                        <div className='col-12 col-md-6'>
                            <p className='text text-tatooine text-right'>Generally ignored by the galaxy at large, Tatooine gained the notice of the Empire during the Galactic Civil War when an escape pod carrying two droids in possession of top-secret information launched from the starship Tantive IV and landed on the sandy Outer Rim world.</p>
                        </div>
                    </div>
                </div>
                <div className='layer layer-wave-1'></div>
            </div>
            <div className='parallax parallax-palace' ref={parallaxPalace}>
                <div className='layer layer-2-1'></div>
                <div className='layer layer-2-2'></div>
                <div className='layer layer-2-3'></div>
            </div>
            <div className='content content-palace'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='title title-palace'>Jabba's Palace</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='quote quote-palace'>"So the only thing that you can tell me is that I will find Jabba... at Jabba's Palace?"<br/>―Maul interrogates Oruba the Hutt</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <p className='text text-palace'>Jabba the Hutt's Palace was located in the Dune Sea on Tatooine, and was accessible on land by a single dirt road that stretched through a canyon. The palace, constructed with sandblasted metal and stone, was where Jabba conducted illicit business deals. The structure was a fortress, with a defensive design that focused primarily on protection from attack.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-0 col-md-6'></div>
                        <div className='col-12 col-md-6'>
                            <p className='text text-palace text-right'>Jabba's Palace was a monastery that belonged to the B'omarr Order, a religious community who believed in isolating themselves from all physical stimuli to enhance their mental powers. The earliest parts of the monastery were underground, and included a mine. At one point, a bandit named Alkhara appropriated the monastery for himself. He occupied it for 34 years, during which he added battlements, dungeons, and a nine-story tower, and also cut a road from the citadel to the Western Dune Sea and Great Pit of Carkoon. Eventually, he was driven off by Jabba.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <p className='text text-palace'>Jabba's Palace was a monastery that belonged to the B'omarr Order, a religious community who believed in isolating themselves from all physical stimuli to enhance their mental powers. The earliest parts of the monastery were underground, and included a mine. At one point, a bandit named Alkhara appropriated the monastery for himself. He occupied it for 34 years, during which he added battlements, dungeons, and a nine-story tower, and also cut a road from the citadel to the Western Dune Sea and Great Pit of Carkoon. Eventually, he was driven off by Jabba.</p>
                        </div>
                    </div>
                </div>
                <div className='layer-wave-2'></div>
            </div>
            <div className='footer'>
                <p className='text-footer'>Designed & Created by <a className='link-footer' href='https://github.com/JakubChoszcz' target='_blank'>Choszcz</a></p>
            </div>
        </div>
    )
}

export default App