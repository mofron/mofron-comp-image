/**
 * @file   mofron-comp-image/index.js
 * @author simpart
 */

/**
 * @class Image
 * @brief image component for mofron
 */
mofron.comp.Image = class extends mofron.Component {
    
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
    
    initDomConts () {
        try {
            this.adom().addChild(
                new mofron.Dom('img', this)
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    path (prm) {
        try { return this.value(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    base64 (prm) {
        try { return this.value(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
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
