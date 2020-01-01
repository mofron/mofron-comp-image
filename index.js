/**
 * @file mofron-comp-image/index.js
 * @brief image component for mofron
 * @license MIT
 */

module.exports = class extends mofron.class.Component {
    /**
     * initialize image component
     *
     * @param (mixed) path parameter
     *                key-value: component option
     * @short path
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name("Image");
            this.shortForm("path");

	    if (0 < arguments.length) {
                this.config(p1);
            }
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
        try {
	    super.initDomConts('img');
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * image path
     *
     * @param (string) path to image
     * @return (string) path to image
     * @type parameter
     */
    path (prm) {
        try {
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
     * @type parameter
     */
    base64 (prm) {
        try {
            return this.value(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * src value of dom attribute
     * 
     * @param (string) path to image file
     * @return (string) path to image file
     * @type parameter
     */
    src (prm) {
        try {
	    return this.value(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * src value of dom attribute
     * 
     * @param (mixed) string: path to image
     *                number: base64 value
     * @return (mixed) src value of dom attribute
     * @type private
     */
    value (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return this.target().attr('src');
            }
            /* setter */
            if (('string' !== typeof prm) && ('number' !== typeof prm)) {
                throw new Error('invalid parameter');
            }
            this.childDom().attrs({ src : prm });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
