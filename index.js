/**
 * @file   mofron-comp-image/index.js
 * @brief  image component for mofron
 * @author simpart
 */
const mf = require('mofron');

mf.comp.Image = class extends mofron.Component {
    /**
     * initialize image component
     *
     * @param "path" parameter
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name("Image");
            this.prmMap("path");
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     *
     * @type private
     */
    initDomConts () {
        try { super.initDomConts('img'); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * image path
     *
     * @param (string) path to image
     * @return (string) path to image
     * @type tag parameter
     */
    path (prm) {
        try {
            if ((undefined !== prm) && ("string" !== typeof prm)) {
                throw new Error("invalid parameter");
            }
            return this.value(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * base64 image value
     *
     * @param (number) base64 image value
     * @return (number) base64 image value
     * @type tag parameter
     */
    base64 (prm) {
        try {
            if ((undefined !== prm) && ("number" !== typeof prm)) {
                throw new Error("invalid parameter");
            }
            return this.value(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * src value of dom attribute
     * 
     * @param (string/number) same as "value"
     * @return (string) src value of dom attribute
     * @type tag parameter
     */
    src (prm) {
        try { return this.value(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * src value of dom attribute
     * 
     * @param (string/number) src value of dom attribute
     * @return (string) src value of dom attribute
     * @type private
     */
    value (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return this.target().attr('src');
            }
            /* setter */
            if ('string' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            this.target().attr({ src : prm });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Image;
/* end of file */
