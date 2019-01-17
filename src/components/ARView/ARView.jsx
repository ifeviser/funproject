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
            'https://aframe.io/releases/0.8.0/aframe.min.js',
            'https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.0/aframe/build/aframe-ar.js'
        ]
    }
    /* ======================== */
    // CONSTRUCTOR
    /* ======================== */
    constructor(props) {
        super(props);
    }
    componentDidMount() {
            
    }
    /* ======================== */
    // RENDER
    /* ======================== */
    render() {
        return (
            <a-scene >
                 <a-assets>
                    <video id="penguin-sledding" autoPlay loop={true} src="sample.mp4"></video>
                </a-assets>

                <a-marker-camera preset='hiro'>
                    <a-entity rotation="-90 0 0">
                        <a-video src="#penguin-sledding" width="4" height="2.25" position="0 0 0"></a-video>
                    </a-entity>
                </a-marker-camera>
            </a-scene>
        );
    }
}
/* ========================================== */
// Export
/* ========================================== */
export default ARView;