/* ================================================================ */
// AR VIEWPORT COMPONENT | ARView.jsx
/* ================================================================ */
/* ========================================== */
// Imports
/* ========================================== */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* ========================================== */
/**
 * AR View
 * -------
 * Outputs Web AR scene using external scripts (AR.js)
 */
/* ========================================== */
class ARView extends Component {
    /* ======================== */
    // PROPS
    /* ======================== */
    static propTypes = {
        scripts: PropTypes.arrayOf(PropTypes.string)
    }
    static defaultProps = {
        scripts: [
            'https://aframe.io/releases/0.6.1/aframe.min.js',
            'https://cdn.rawgit.com/jeromeetienne/AR.js/1.5.0/aframe/build/aframe-ar.js'
        ]
    }
    /* ======================== */
    // CONSTRUCTOR
    /* ======================== */
    constructor(props) {
        super(props);
        this.scripts = [];
    }
    componentDidMount() {
        this.props.scripts.map(src => {
            const scriptTag = document.createElement('script');
            scriptTag.src = src;
            scriptTag.async = true;
            scriptTag.onload = (error) => {
                console.log(error);
            };
            document.body.appendChild(scriptTag);
            // Push ref to component global scripts var
            this.scripts.push(scriptTag);
        });
    }
    /* ======================== */
    // RENDER
    /* ======================== */
    render() {
        return (
            <a-scene embedded arjs>
                <a-marker preset="hiro">
                    <a-box position='0 0.5 0' material='color: black;'></a-box>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>
        );
    }
}
/* ========================================== */
// Export
/* ========================================== */
export default ARView;