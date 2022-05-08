// We need to tell the JSX transpiler that in this file,
// instead of React we use the custom createElement and Fragment
// functions from jsx-readme
/* @jsx MD */
/* @jsxFrag Fragment */
import type {Component} from "jsx-readme";
import MD, {Fragment, renderToFile,} from "jsx-readme";
import {Heading} from 'jsx-md';

const Readme: Component = () => (
    <Fragment>
        <Heading level={1}>Hello World!</Heading>
    </Fragment>
);
void renderToFile("./README.md", <Readme/>);
