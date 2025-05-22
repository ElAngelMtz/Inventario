import styled from "styled-components";
import {LinksArray, SecondarylinksArray, ToggleTema} from "../../index";
import { NavLink } from "react-router-dom";
import {v} from "../../styles/variables";
import React, { useState } from "react";
export function MenuHambur() {
    const [click, setClick] = useState(false);
    return (
        <Container>
            <NavBar>
                <section>
                    <HamburgerMenu onClick={()=>setClick(!click)}>
                        <div id="menuToogle">
                            <label className={click?"toggle active":"toggle"}>
                                <div className="bar bar--top"></div>
                                <div className="bar bar--middle"></div>
                                <div className="bar bar--bottom"></div>
                            </label>
                        </div>
                    </HamburgerMenu>
                </section>
                <Menu $click={click.toString()}>
                    {LinksArray.map(({ icon, label, to }) => (
                        <div onClick={()=>setClick(!click)} className= "LinkContainer" key={label}>
                            <NavLink to={to} className= "Links">
                                <div className="Linkicon">{icon}</div>
                                <span>{label}</span>
                            </NavLink>
                        </div>
                    ))}
                    <Divider />
                    {SecondarylinksArray.map(({ icon, label, to }) => (
                        <div onClick={()=>setClick(!click)} className= "LinkContainer" key={label}>
                            <NavLink to={to} className="Links">
                                <div className="Linkicon">{icon}</div>
                                <span>{label}</span>
                            </NavLink>
                        </div>
                    ))}
                        <ToggleTema/>
                        <Divider />
                </Menu>
            </NavBar>
        </Container>
    );
}
const Container = styled.div`
    background-color: ${({theme}) => theme.body};
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
`;

const HamburgerMenu = styled.span`
    position: fixed;
    top: 2rem;
    z-index: 100;

    #checkbox {
        display: none;
    }

    .toggle {
        position: relative;
        width: 40px;
        cursor: pointer;
        margin: auto;
        display: block;
        height: calc(4px * 3 + 11px * 2);
        &.active {
            .bar--top {
                transform: rotate(-135deg);
                transition-delay: 0s;
                bottom: calc(50% - 4px/ 2);
            }
            .bar--middle {
                opacity: 0;
                transform: rotate(-135deg);
                transition-delay: calc(0s + 0.35s * .3);
            }
            .bar--bottom {
                top: calc(50% - 4px/ 2);
                transform: rotate(-225deg);
                transition-delay: calc(0s + 0.35s * .6);
            }
        }
    }

    .bar {
        position: absolute;
        left: 0;
        right: 0;
        height: 4px;
        border-radius: calc(4px / 2);
        background: ${({theme}) => theme.text};
        opacity: 1;
        transition: none 0.35s cubic-bezier(.5,-0.35,.35,1.5) 0s;
    }

    .bar--top {
        bottom: calc(50% + 11px + 4px/ 2);
        transition-property: bottom,transform;
        transition-delay: calc(0s + 0.35s) * .6;
    }

    .bar--middle {
        top: calc(50% - 4px/ 2);
        transition-property: opacity,transform;
        transition-delay: calc(0s + 0.35s * .3);
    }

    .bar--bottom {
        top: calc(50% + 11px + 4px/ 2);
        transition-property: top,transform;
        transition-delay: 0s;
    }
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    z-index: 10;
    flex-direction: column;
    position: fixed;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    background-color:${(props)=>`rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(3px);
    transform: ${(props) => props.$click == "true" ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;

    .LinkContainer {

        &:hover {
            background: ${({theme}) => theme.bgAlpha};
        } 

        .Links {
            width: 100vw;
            display: flex;
            align-items: center;
            text-decoration: none;
            color: ${({theme}) => theme.text};
            height: 80px;

            .Linkicon {
                padding: ${v.smSpacing} ${v.mdSpacing};
                display: flex;
                
                svg {
                    font-size: 25px;
                }
            }
        }
    }
`;
const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.bg4};
    margin: ${() => v.lgSpacing} 0;
`;