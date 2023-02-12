import React from 'react'
import {FaHotjar, FaStar} from 'react-icons/fa'
import {SiNetflix} from 'react-icons/si'
import {MdTheaterComedy} from 'react-icons/md'
import {GiNinjaHeroicStance, 
    GiRomanToga,
    GiGhost, 
    GiBandageRoll} from 'react-icons/gi'
import styled from 'styled-components'
import MenuItem from './MenuItem'
export default function Menus(props) {
  return (
    <MenusPane>
        <MenuItem name="Netflix" Icon={SiNetflix} to='netflix'/>
        <MenuItem name="Trending" Icon={FaHotjar} to='trending'/>
        <MenuItem name="Top rate" Icon={FaStar} to='topRated'/>
        <MenuItem name="Action Movies" Icon={GiNinjaHeroicStance} to='actionMovies'/>
        <MenuItem name="Comedy Movies" Icon={MdTheaterComedy} to='comedyMovies'/>
        <MenuItem name="Horror Movies" Icon={GiGhost} to='horrorMovies'/>
        <MenuItem name="Romance Movies" Icon={GiRomanToga} to='romanceMovies'/>
        <MenuItem name="Documantaries" Icon={GiBandageRoll} to='documentaries'/>
    </MenusPane>
  )
}

const MenusPane = styled.div`
    position: fixed;
    left: 0;
    top: 20%;
    width: 46px;
    padding: 4px 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
    flex-direction: columns;
    transform-origin: left center;
    transition: all 0.3s linear;
    overflow: hidden;
    &:hover {
        width: 180px;
        background-color: rgba(0, 0, 0, 0.5)
    }

    .subMenu {
        display: flex;
        align-items: center;
        width: max-content;
        margin-left: 2px;
        padding: 4px 6px;
        cursor: pointer;

        .icon {
            font-size: 30px;
            margin-right: 8px;
        }
        span {
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.6);

            &:hover {
                color: #fff;
            }
        }
    }
`