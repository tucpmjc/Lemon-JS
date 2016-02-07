import {Light} from './Light.js';

/**
 * A directional light
 *
 * @extends {Light}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class DirectionalLight extends Light
{
    /**
     * Constructor
     */
    constructor()
    {
        super();

        /**
         * Light's direction
         *
         * @type {Array.<number>}
         * @private
         */
        this.direction = [];
    }

    /**
     * Set direction
     *
     * @param {number} x Direction on X
     * @param {number} y Direction on Y
     * @param {number} z Direction on Z
     */
    setDirection(x, y, z) 
    {
        this.direction = [x, y, z];
    }

    /**
     * Get direction
     *
     * @return {Array.<number>} A vector with values for each axis
     */
    getDirection() 
    {
        return this.direction; 
    }
}
