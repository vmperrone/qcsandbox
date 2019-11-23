import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Header = () => (
  <Wrapper>
    <HeaderGroup>
      <img src="/assets/logo.svg" alt="" aria-label="icon" width="40" />
    </HeaderGroup>
    <HeaderGroupLinks>
      <Link href="/tutorials">
        <NewLink>
          Tutorials
          <NewLinkText>New</NewLinkText>
        </NewLink>
      </Link>
      <Link href="/games">
        <NewLink>
          Games
          <NewLinkText bg="#F49B0B">Soon</NewLinkText>
        </NewLink>
      </Link>
      <Link href="/sandbox">
        <NewLink>
          Sandbox
          <NewLinkText bg="#F49B0B">Soon</NewLinkText>
        </NewLink>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </HeaderGroupLinks>
  </Wrapper>
);

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 1rem;
  margin: auto;
  transition: all 0.3s ease 0s;
`;

const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderGroupLinks = styled(HeaderGroup)`
  @media all and (max-width: 930px) {
    display: none;
  }
`;

export const NewLink = styled.a`
  ursor: pointer;
  user-select: none;
  transition: background 120ms ease-in 0s;
  width: auto;
  padding: 4px 10px;
  border-radius: 3px;
  flex-shrink: 0;
  font-size: 15px;
  margin-left: 2px;
  margin-right: 2px;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: ${props => props.color};
`;

export const NewLinkText = styled.div`
  align-self: center;
  margin-bottom: 8px;
  padding: 1px 3px;
  background: ${props => props.bg || "#3291ff"};
  color: white;
  border-radius: 3px;
  margin-left: 6px;
  font-size: 9px;
  line-height: 1.3;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export default Header;
