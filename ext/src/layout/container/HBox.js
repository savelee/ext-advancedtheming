/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

Pre-release code in the Ext repository is intended for development purposes only and will
not always be stable. 

Use of pre-release code is permitted with your application at your own risk under standard
Ext license terms. Public redistribution is prohibited.

For early licensing, please contact us at licensing@sencha.com

Build date: 2013-09-24 09:54:40 (49c9fcbdd1f9639004ca99870d3b40d46aa40089)
*/
/**
 * A layout that arranges items horizontally across a Container. This layout optionally divides available horizontal
 * space between child items containing a numeric `flex` configuration.
 *
 * This layout may also be used to set the heights of child items by configuring it with the {@link #align} option.
 *
 *     @example
 *     Ext.create('Ext.Panel', {
 *         width: 500,
 *         height: 300,
 *         title: "HBoxLayout Panel",
 *         layout: {
 *             type: 'hbox',
 *             align: 'stretch'
 *         },
 *         renderTo: document.body,
 *         items: [{
 *             xtype: 'panel',
 *             title: 'Inner Panel One',
 *             flex: 2
 *         },{
 *             xtype: 'panel',
 *             title: 'Inner Panel Two',
 *             flex: 1
 *         },{
 *             xtype: 'panel',
 *             title: 'Inner Panel Three',
 *             flex: 1
 *         }]
 *     });
 */
Ext.define('Ext.layout.container.HBox', {

    /* Begin Definitions */

    alias: ['layout.hbox'],
    extend: 'Ext.layout.container.Box',
    alternateClassName: 'Ext.layout.HBoxLayout',

    /* End Definitions */

    /**
     * @cfg {String} align
     * Controls how the child items of the container are aligned. Acceptable configuration values for this property are:
     *
     * - **top** : **Default** child items are aligned vertically at the **top** of the container.
     * - **middle** : child items are aligned vertically in the **middle** of the container.
     * - **bottom** : child items are aligned vertically at the **bottom** of the container.
     * - **stretch** : child items are stretched vertically to fill the height of the container.
     * - **stretchmax** : child items are stretched vertically to the height of the largest item.
     */
    align: 'top', // top, middle, stretch, strechmax

    /**
     * @cfg {"round"/"floor"/"ceil"} [alignRoundingMethod='round'] The Math method to use
     * for rounding fractional pixels when `{@link #align}:middle` is used.
     */
    
    /**
     * @cfg {Boolean} constrainAlign
     * Limits the size of {@link #align aligned} components to the size of the container under certain circumstances.
     * Firstly, the container height must not be determined by the height of the child components. Secondly, the child
     * components must have their height {@link Ext.AbstractComponent#shrinkWrap shrinkwrapped}.
     */
    constrainAlign: false,

    type : 'hbox',

    direction: 'horizontal',

    horizontal: true,

    names: {
        // parallel
        beforeX: 'left',
        beforeScrollX: 'left',
        beforeScrollerSuffix: '-before-scroller',
        afterScrollerSuffix: '-after-scroller',
        leftCap: 'Left',
        afterX: 'right',
        width: 'width',
        contentWidth: 'contentWidth',
        minWidth: 'minWidth',
        maxWidth: 'maxWidth',
        widthCap: 'Width',
        widthModel: 'widthModel',
        widthIndex: 0,
        x: 'x',
        scrollLeft: 'scrollLeft',
        overflowX: 'overflowX',
        hasOverflowX: 'hasOverflowX',
        invalidateScrollX: 'invalidateScrollX',
        parallelMargins: 'lr',

        // perpendicular
        center: 'middle',
        beforeY: 'top',
        afterY: 'bottom',
        height: 'height',
        contentHeight: 'contentHeight',
        minHeight: 'minHeight',
        maxHeight: 'maxHeight',
        heightCap: 'Height',
        heightModel: 'heightModel',
        heightIndex: 1,
        y: 'y',
        overflowY: 'overflowY',
        hasOverflowY: 'hasOverflowY',
        invalidateScrollY: 'invalidateScrollY',
        perpendicularMargins: 'tb',

        // Methods
        getWidth: 'getWidth',
        getHeight: 'getHeight',
        setWidth: 'setWidth',
        setHeight: 'setHeight',
        gotWidth: 'gotWidth',
        gotHeight: 'gotHeight',
        setContentWidth: 'setContentWidth',
        setContentHeight: 'setContentHeight',
        setWidthInDom: 'setWidthInDom',
        setHeightInDom: 'setHeightInDom',
        getScrollLeft: 'getScrollLeft',
        setScrollLeft: 'setScrollLeft',
        scrollTo: 'scrollTo'
    },

    sizePolicy: {
        flex: {
            '': {
                readsWidth : 0,
                readsHeight: 1,
                setsWidth  : 1,
                setsHeight : 0
            },
            stretch: {
                readsWidth : 0,
                readsHeight: 0,
                setsWidth  : 1,
                setsHeight : 1
            },
            stretchmax: {
                readsWidth : 0,
                readsHeight: 1,
                setsWidth  : 1,
                setsHeight : 1
            }
        },
        '': {
            readsWidth : 1,
            readsHeight: 1,
            setsWidth  : 0,
            setsHeight : 0
        },
        stretch: {
            readsWidth : 1,
            readsHeight: 0,
            setsWidth  : 0,
            setsHeight : 1
        },
        stretchmax: {
            readsWidth : 1,
            readsHeight: 1,
            setsWidth  : 0,
            setsHeight : 1
        }
    }            
});
