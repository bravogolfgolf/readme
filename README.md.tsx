/* @jsx MD */
/* @jsxFrag Fragment */
import type {Component} from "jsx-readme";
import MD, {Fragment, renderToFile,} from "jsx-readme";
import {BlockQuote, Heading, HorizontalRule, LineBreak} from 'jsx-md';

const Readme: Component = () => (
    <Fragment>
        <Heading level={6}>BlockQuote</Heading>
        <HorizontalRule/>
        <BlockQuote children={''}>Test1{'/n'}Test2</BlockQuote>
        <LineBreak/>
    </Fragment>
);
void renderToFile("./README.md", <Readme/>);
