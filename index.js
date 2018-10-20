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
     * @param p1 (string) path to image
     */
    constructor (po) {
        try {
            super();
            this.name('Image');
            this.prmMap('value');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     *
     * @note private method
     */
    initDomConts () {
        try { super.initDomConts('img'); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter image path
     *
     * @param p1 (string) path to image
     * @param p1 (undefined) call as getter
     * @return (string) path to image
     */
    path (prm) {
        try { return this.value(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter base64 image value
     *
     * @param p1 (number) base64 image value
     * @param p1 (undefined) call as getter
     * @return (number) base64 image value
     */
    base64 (prm) {
        try { return this.value(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * src value of dom attribute
     * 
     * @param p1 (string/number) src value of dom attribute
     * @note private method
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
