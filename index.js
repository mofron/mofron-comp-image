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
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            this.adom().addChild(
                new mofron.Dom({
                    tag       : 'img',
                    component : this,
                    attr      : {
                        src : (undefined !== prm) ? prm : ''
                    }
                })
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    path (val) {
        try {
            if (undefined === val) {
                /* getter */
                return (undefined === this.m_path) ? null : this.m_path;
            }
            /* setter */
            if ('string' !== typeof val) {
                throw new Error('invalid parameter');
            }
            this.m_path = val;
            this.target().attr({
                src : val
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Image;
