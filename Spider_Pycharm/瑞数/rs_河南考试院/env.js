function getEnvironment(proxyArray) {
    proxyArray.forEach((objName) => {
        let target = globalThis[objName] || {};
        const handler = {
            get(target, property, receiver) {
                console.log(
                    "方法:", "get",
                    "对象:", objName,
                    "属性:", property,
                    // "属性值:", target[property],
                    "属性类型:", typeof property,
                    "属性值类型:", typeof target[property],


                );
                return target[property];
            },
            set(target, property, value, receiver) {
                console.log(
                    "方法:", "set",
                    "对象:", objName,
                    "属性:", property,
                    // "属性值:", value,
                    "属性类型:", typeof property,
                    "属性值类型:", typeof target[property]
                );
                return Reflect.set(target, property, value, receiver);
            }
        };

        try {
            globalThis[objName] = new Proxy(target, handler);
        } catch (e) {
            console.error(`Failed to create Proxy for ${objName}:`, e);
            globalThis[objName] = target;
        }
    });
}
const v8 =require('v8');
const vm=require('vm');
v8.setFlagsFromString('--allow-natives-syntax');
let undetectable = vm.runInThisContext("%GetUndetectable()");
v8.setFlagsFromString('--no-allow-natives-syntax');

console.log(Request.pr);

// Example usage
delete __dirname;
delete __filename;
Window = function(){}
window = global


var content="metaContent"

window.name ='$_YWTU=HX5GVaayu3GI_poWmFzQyyZQDYsbNi7svdxtHG007Vg&$_YVTX=WG&vdFm=';
window.localStorage = {
    "$_YWTU": "HX5GVaayu3GI_poWmFzQyyZQDYsbNi7svdxtHG007Vg",
    "_$rc": "RlNu05JARb_m9AaFfhzO4EYa_QsXk2idaGc45aGvYTf9Vxd4Nk.Z4jEGQO7",
    "Hm_lvt_718056a8a88d31be5b2ee94e9980b3a4": "1776841703123|1745305703",
    "__#classType": "localStorage",
    "$_YVTX": "WG",
    removeItem: function () {
        console.log('localStorage 调用方法:', 'removeItem >>>> 参数 >>>>',arguments);
    },
    getItem: function () {
        console.log('localStorage 调用方法:', 'getItem >>>> 参数 >>>>',arguments);
        if (arguments[0] == '$_YWTU' ){
            return "HX5GVaayu3GI_poWmFzQyyZQDYsbNi7svdxtHG007Vg"
        }
        if (arguments[0] == '$_YVTX')
        return "WG"

    },
    setItem: function () {
        console.log('localStorage 调用方法:', 'setItem >>>> 参数 >>>>',arguments);
        return undefined
    }
}
window.sessionStorage = {
    "$_YWTU": "HX5GVaayu3GI_poWmFzQyyZQDYsbNi7svdxtHG007Vg",
    "Hm_unsent_718056a8a88d31be5b2ee94e9980b3a4": "[\"hm.baidu.com/hm.gif?hca=B08E71D239F024F1&cc=1&ck=1&cl=24-bit&ds=1920x1080&vl=893&ep=3794%2C1699&et=3&ja=0&ln=zh-cn&lo=0&rnd=943681121&si=718056a8a88d31be5b2ee94e9980b3a4&su=https%3A%2F%2Fwww.haeea.cn%2F&v=1.3.2&lv=1&sn=43118&r=0&ww=1138&u=https%3A%2F%2Fwww.haeea.cn%2F\"]",
    "Hm_lpvt_718056a8a88d31be5b2ee94e9980b3a4": "1745305703",
    "HMACCOUNT": "B08E71D239F024F1",
    "$_YVTX": "WG",
    getItem: function () {
        console.log('sessionStorage 调用方法:', 'getItem >>>> 参数 >>>>',arguments);
        if (arguments[0] == '$_YWTU' ){
            return "HX5GVaayu3GI_poWmFzQyyZQDYsbNi7svdxtHG007Vg"
        }
        if (arguments[0] == '$_YVTX')
            return "WG"

    },
    setItem: function () {
        console.log('sessionStorage 调用方法:', 'setItem >>>> 参数 >>>>',arguments);
        return undefined
    }
}
open = {
    readyState:'pending',
}
window.indexedDB = {
    open : function (s) {
        console.log('indexedDB 调用方法:', 'open >>>> 参数 >>>>',s);
        if(s == 'EkcP' ){
            return open
        }
    }
}
XMLHttpRequest = function () {
    console.log("window 调用方法:", "XMLHttpRequest >>>>参数 >>>>", arguments);

}
window.addEventListener =function(){
    console.log('window 调用方法:', 'addEventListener >>>> 参数 >>>>',arguments);
}
window.attachEvent =function(){
    console.log('window 调用方法:', 'attachEvent >>>> 参数 >>>>',arguments);

},
window.DOMParser = function () {
    console.log('DOMParser: 参数为：',arguments);
}
window.ActiveXObject = undefined
arr = []
style = {
    "accentColor": "",
    "additiveSymbols": "",
    "alignContent": "",
    "alignItems": "",
    "alignSelf": "",
    "alignmentBaseline": "",
    "all": "",
    "anchorName": "",
    "anchorScope": "",
    "animation": "",
    "animationComposition": "",
    "animationDelay": "",
    "animationDirection": "",
    "animationDuration": "",
    "animationFillMode": "",
    "animationIterationCount": "",
    "animationName": "",
    "animationPlayState": "",
    "animationRange": "",
    "animationRangeEnd": "",
    "animationRangeStart": "",
    "animationTimeline": "",
    "animationTimingFunction": "",
    "appRegion": "",
    "appearance": "",
    "ascentOverride": "",
    "aspectRatio": "",
    "backdropFilter": "",
    "backfaceVisibility": "",
    "background": "",
    "backgroundAttachment": "",
    "backgroundBlendMode": "",
    "backgroundClip": "",
    "backgroundColor": "",
    "backgroundImage": "",
    "backgroundOrigin": "",
    "backgroundPosition": "",
    "backgroundPositionX": "",
    "backgroundPositionY": "",
    "backgroundRepeat": "",
    "backgroundSize": "",
    "basePalette": "",
    "baselineShift": "",
    "baselineSource": "",
    "blockSize": "",
    "border": "",
    "borderBlock": "",
    "borderBlockColor": "",
    "borderBlockEnd": "",
    "borderBlockEndColor": "",
    "borderBlockEndStyle": "",
    "borderBlockEndWidth": "",
    "borderBlockStart": "",
    "borderBlockStartColor": "",
    "borderBlockStartStyle": "",
    "borderBlockStartWidth": "",
    "borderBlockStyle": "",
    "borderBlockWidth": "",
    "borderBottom": "",
    "borderBottomColor": "",
    "borderBottomLeftRadius": "",
    "borderBottomRightRadius": "",
    "borderBottomStyle": "",
    "borderBottomWidth": "",
    "borderCollapse": "",
    "borderColor": "",
    "borderEndEndRadius": "",
    "borderEndStartRadius": "",
    "borderImage": "",
    "borderImageOutset": "",
    "borderImageRepeat": "",
    "borderImageSlice": "",
    "borderImageSource": "",
    "borderImageWidth": "",
    "borderInline": "",
    "borderInlineColor": "",
    "borderInlineEnd": "",
    "borderInlineEndColor": "",
    "borderInlineEndStyle": "",
    "borderInlineEndWidth": "",
    "borderInlineStart": "",
    "borderInlineStartColor": "",
    "borderInlineStartStyle": "",
    "borderInlineStartWidth": "",
    "borderInlineStyle": "",
    "borderInlineWidth": "",
    "borderLeft": "",
    "borderLeftColor": "",
    "borderLeftStyle": "",
    "borderLeftWidth": "",
    "borderRadius": "",
    "borderRight": "",
    "borderRightColor": "",
    "borderRightStyle": "",
    "borderRightWidth": "",
    "borderSpacing": "",
    "borderStartEndRadius": "",
    "borderStartStartRadius": "",
    "borderStyle": "",
    "borderTop": "",
    "borderTopColor": "",
    "borderTopLeftRadius": "",
    "borderTopRightRadius": "",
    "borderTopStyle": "",
    "borderTopWidth": "",
    "borderWidth": "",
    "bottom": "",
    "boxDecorationBreak": "",
    "boxShadow": "",
    "boxSizing": "",
    "breakAfter": "",
    "breakBefore": "",
    "breakInside": "",
    "bufferedRendering": "",
    "captionSide": "",
    "caretColor": "",
    "clear": "",
    "clip": "",
    "clipPath": "",
    "clipRule": "",
    "color": "",
    "colorInterpolation": "",
    "colorInterpolationFilters": "",
    "colorRendering": "",
    "colorScheme": "",
    "columnCount": "",
    "columnFill": "",
    "columnGap": "",
    "columnRule": "",
    "columnRuleColor": "",
    "columnRuleStyle": "",
    "columnRuleWidth": "",
    "columnSpan": "",
    "columnWidth": "",
    "columns": "",
    "contain": "",
    "containIntrinsicBlockSize": "",
    "containIntrinsicHeight": "",
    "containIntrinsicInlineSize": "",
    "containIntrinsicSize": "",
    "containIntrinsicWidth": "",
    "container": "",
    "containerName": "",
    "containerType": "",
    "content": "",
    "contentVisibility": "",
    "counterIncrement": "",
    "counterReset": "",
    "counterSet": "",
    "cursor": "",
    "cx": "",
    "cy": "",
    "d": "",
    "descentOverride": "",
    "direction": "",
    "display": "",
    "dominantBaseline": "",
    "emptyCells": "",
    "fallback": "",
    "fieldSizing": "",
    "fill": "",
    "fillOpacity": "",
    "fillRule": "",
    "filter": "",
    "flex": "",
    "flexBasis": "",
    "flexDirection": "",
    "flexFlow": "",
    "flexGrow": "",
    "flexShrink": "",
    "flexWrap": "",
    "float": "",
    "floodColor": "",
    "floodOpacity": "",
    "font": "",
    "fontDisplay": "",
    "fontFamily": "",
    "fontFeatureSettings": "",
    "fontKerning": "",
    "fontOpticalSizing": "",
    "fontPalette": "",
    "fontSize": "",
    "fontSizeAdjust": "",
    "fontStretch": "",
    "fontStyle": "",
    "fontSynthesis": "",
    "fontSynthesisSmallCaps": "",
    "fontSynthesisStyle": "",
    "fontSynthesisWeight": "",
    "fontVariant": "",
    "fontVariantAlternates": "",
    "fontVariantCaps": "",
    "fontVariantEastAsian": "",
    "fontVariantEmoji": "",
    "fontVariantLigatures": "",
    "fontVariantNumeric": "",
    "fontVariantPosition": "",
    "fontVariationSettings": "",
    "fontWeight": "",
    "forcedColorAdjust": "",
    "gap": "",
    "grid": "",
    "gridArea": "",
    "gridAutoColumns": "",
    "gridAutoFlow": "",
    "gridAutoRows": "",
    "gridColumn": "",
    "gridColumnEnd": "",
    "gridColumnGap": "",
    "gridColumnStart": "",
    "gridGap": "",
    "gridRow": "",
    "gridRowEnd": "",
    "gridRowGap": "",
    "gridRowStart": "",
    "gridTemplate": "",
    "gridTemplateAreas": "",
    "gridTemplateColumns": "",
    "gridTemplateRows": "",
    "height": "",
    "hyphenateCharacter": "",
    "hyphenateLimitChars": "",
    "hyphens": "",
    "imageOrientation": "",
    "imageRendering": "",
    "inherits": "",
    "initialLetter": "",
    "initialValue": "",
    "inlineSize": "",
    "inset": "",
    "insetBlock": "",
    "insetBlockEnd": "",
    "insetBlockStart": "",
    "insetInline": "",
    "insetInlineEnd": "",
    "insetInlineStart": "",
    "interactivity": "",
    "interpolateSize": "",
    "isolation": "",
    "justifyContent": "",
    "justifyItems": "",
    "justifySelf": "",
    "left": "",
    "letterSpacing": "",
    "lightingColor": "",
    "lineBreak": "",
    "lineGapOverride": "",
    "lineHeight": "",
    "listStyle": "",
    "listStyleImage": "",
    "listStylePosition": "",
    "listStyleType": "",
    "margin": "",
    "marginBlock": "",
    "marginBlockEnd": "",
    "marginBlockStart": "",
    "marginBottom": "",
    "marginInline": "",
    "marginInlineEnd": "",
    "marginInlineStart": "",
    "marginLeft": "",
    "marginRight": "",
    "marginTop": "",
    "marker": "",
    "markerEnd": "",
    "markerMid": "",
    "markerStart": "",
    "mask": "",
    "maskClip": "",
    "maskComposite": "",
    "maskImage": "",
    "maskMode": "",
    "maskOrigin": "",
    "maskPosition": "",
    "maskRepeat": "",
    "maskSize": "",
    "maskType": "",
    "mathDepth": "",
    "mathShift": "",
    "mathStyle": "",
    "maxBlockSize": "",
    "maxHeight": "",
    "maxInlineSize": "",
    "maxWidth": "",
    "minBlockSize": "",
    "minHeight": "",
    "minInlineSize": "",
    "minWidth": "",
    "mixBlendMode": "",
    "navigation": "",
    "negative": "",
    "objectFit": "",
    "objectPosition": "",
    "objectViewBox": "",
    "offset": "",
    "offsetAnchor": "",
    "offsetDistance": "",
    "offsetPath": "",
    "offsetPosition": "",
    "offsetRotate": "",
    "opacity": "",
    "order": "",
    "orphans": "",
    "outline": "",
    "outlineColor": "",
    "outlineOffset": "",
    "outlineStyle": "",
    "outlineWidth": "",
    "overflow": "",
    "overflowAnchor": "",
    "overflowBlock": "",
    "overflowClipMargin": "",
    "overflowInline": "",
    "overflowWrap": "",
    "overflowX": "",
    "overflowY": "",
    "overlay": "",
    "overrideColors": "",
    "overscrollBehavior": "",
    "overscrollBehaviorBlock": "",
    "overscrollBehaviorInline": "",
    "overscrollBehaviorX": "",
    "overscrollBehaviorY": "",
    "pad": "",
    "padding": "",
    "paddingBlock": "",
    "paddingBlockEnd": "",
    "paddingBlockStart": "",
    "paddingBottom": "",
    "paddingInline": "",
    "paddingInlineEnd": "",
    "paddingInlineStart": "",
    "paddingLeft": "",
    "paddingRight": "",
    "paddingTop": "",
    "page": "",
    "pageBreakAfter": "",
    "pageBreakBefore": "",
    "pageBreakInside": "",
    "pageOrientation": "",
    "paintOrder": "",
    "perspective": "",
    "perspectiveOrigin": "",
    "placeContent": "",
    "placeItems": "",
    "placeSelf": "",
    "pointerEvents": "",
    "position": "",
    "positionAnchor": "",
    "positionArea": "",
    "positionTry": "",
    "positionTryFallbacks": "",
    "positionTryOrder": "",
    "positionVisibility": "",
    "prefix": "",
    "quotes": "",
    "r": "",
    "range": "",
    "resize": "",
    "right": "",
    "rotate": "",
    "rowGap": "",
    "rubyAlign": "",
    "rubyPosition": "",
    "rx": "",
    "ry": "",
    "scale": "",
    "scrollBehavior": "",
    "scrollInitialTarget": "",
    "scrollMargin": "",
    "scrollMarginBlock": "",
    "scrollMarginBlockEnd": "",
    "scrollMarginBlockStart": "",
    "scrollMarginBottom": "",
    "scrollMarginInline": "",
    "scrollMarginInlineEnd": "",
    "scrollMarginInlineStart": "",
    "scrollMarginLeft": "",
    "scrollMarginRight": "",
    "scrollMarginTop": "",
    "scrollMarkerGroup": "",
    "scrollPadding": "",
    "scrollPaddingBlock": "",
    "scrollPaddingBlockEnd": "",
    "scrollPaddingBlockStart": "",
    "scrollPaddingBottom": "",
    "scrollPaddingInline": "",
    "scrollPaddingInlineEnd": "",
    "scrollPaddingInlineStart": "",
    "scrollPaddingLeft": "",
    "scrollPaddingRight": "",
    "scrollPaddingTop": "",
    "scrollSnapAlign": "",
    "scrollSnapStop": "",
    "scrollSnapType": "",
    "scrollTimeline": "",
    "scrollTimelineAxis": "",
    "scrollTimelineName": "",
    "scrollbarColor": "",
    "scrollbarGutter": "",
    "scrollbarWidth": "",
    "shapeImageThreshold": "",
    "shapeMargin": "",
    "shapeOutside": "",
    "shapeRendering": "",
    "size": "",
    "sizeAdjust": "",
    "speak": "",
    "speakAs": "",
    "src": "",
    "stopColor": "",
    "stopOpacity": "",
    "stroke": "",
    "strokeDasharray": "",
    "strokeDashoffset": "",
    "strokeLinecap": "",
    "strokeLinejoin": "",
    "strokeMiterlimit": "",
    "strokeOpacity": "",
    "strokeWidth": "",
    "suffix": "",
    "symbols": "",
    "syntax": "",
    "system": "",
    "tabSize": "",
    "tableLayout": "",
    "textAlign": "",
    "textAlignLast": "",
    "textAnchor": "",
    "textBox": "",
    "textBoxEdge": "",
    "textBoxTrim": "",
    "textCombineUpright": "",
    "textDecoration": "",
    "textDecorationColor": "",
    "textDecorationLine": "",
    "textDecorationSkipInk": "",
    "textDecorationStyle": "",
    "textDecorationThickness": "",
    "textEmphasis": "",
    "textEmphasisColor": "",
    "textEmphasisPosition": "",
    "textEmphasisStyle": "",
    "textIndent": "",
    "textOrientation": "",
    "textOverflow": "",
    "textRendering": "",
    "textShadow": "",
    "textSizeAdjust": "",
    "textSpacingTrim": "",
    "textTransform": "",
    "textUnderlineOffset": "",
    "textUnderlinePosition": "",
    "textWrap": "",
    "textWrapMode": "",
    "textWrapStyle": "",
    "timelineScope": "",
    "top": "",
    "touchAction": "",
    "transform": "",
    "transformBox": "",
    "transformOrigin": "",
    "transformStyle": "",
    "transition": "",
    "transitionBehavior": "",
    "transitionDelay": "",
    "transitionDuration": "",
    "transitionProperty": "",
    "transitionTimingFunction": "",
    "translate": "",
    "types": "",
    "unicodeBidi": "",
    "unicodeRange": "",
    "userSelect": "",
    "vectorEffect": "",
    "verticalAlign": "",
    "viewTimeline": "",
    "viewTimelineAxis": "",
    "viewTimelineInset": "",
    "viewTimelineName": "",
    "viewTransitionClass": "",
    "viewTransitionName": "",
    "visibility": "",
    "webkitAlignContent": "",
    "webkitAlignItems": "",
    "webkitAlignSelf": "",
    "webkitAnimation": "",
    "webkitAnimationDelay": "",
    "webkitAnimationDirection": "",
    "webkitAnimationDuration": "",
    "webkitAnimationFillMode": "",
    "webkitAnimationIterationCount": "",
    "webkitAnimationName": "",
    "webkitAnimationPlayState": "",
    "webkitAnimationTimingFunction": "",
    "webkitAppRegion": "",
    "webkitAppearance": "",
    "webkitBackfaceVisibility": "",
    "webkitBackgroundClip": "",
    "webkitBackgroundOrigin": "",
    "webkitBackgroundSize": "",
    "webkitBorderAfter": "",
    "webkitBorderAfterColor": "",
    "webkitBorderAfterStyle": "",
    "webkitBorderAfterWidth": "",
    "webkitBorderBefore": "",
    "webkitBorderBeforeColor": "",
    "webkitBorderBeforeStyle": "",
    "webkitBorderBeforeWidth": "",
    "webkitBorderBottomLeftRadius": "",
    "webkitBorderBottomRightRadius": "",
    "webkitBorderEnd": "",
    "webkitBorderEndColor": "",
    "webkitBorderEndStyle": "",
    "webkitBorderEndWidth": "",
    "webkitBorderHorizontalSpacing": "",
    "webkitBorderImage": "",
    "webkitBorderRadius": "",
    "webkitBorderStart": "",
    "webkitBorderStartColor": "",
    "webkitBorderStartStyle": "",
    "webkitBorderStartWidth": "",
    "webkitBorderTopLeftRadius": "",
    "webkitBorderTopRightRadius": "",
    "webkitBorderVerticalSpacing": "",
    "webkitBoxAlign": "",
    "webkitBoxDecorationBreak": "",
    "webkitBoxDirection": "",
    "webkitBoxFlex": "",
    "webkitBoxOrdinalGroup": "",
    "webkitBoxOrient": "",
    "webkitBoxPack": "",
    "webkitBoxReflect": "",
    "webkitBoxShadow": "",
    "webkitBoxSizing": "",
    "webkitClipPath": "",
    "webkitColumnBreakAfter": "",
    "webkitColumnBreakBefore": "",
    "webkitColumnBreakInside": "",
    "webkitColumnCount": "",
    "webkitColumnGap": "",
    "webkitColumnRule": "",
    "webkitColumnRuleColor": "",
    "webkitColumnRuleStyle": "",
    "webkitColumnRuleWidth": "",
    "webkitColumnSpan": "",
    "webkitColumnWidth": "",
    "webkitColumns": "",
    "webkitFilter": "",
    "webkitFlex": "",
    "webkitFlexBasis": "",
    "webkitFlexDirection": "",
    "webkitFlexFlow": "",
    "webkitFlexGrow": "",
    "webkitFlexShrink": "",
    "webkitFlexWrap": "",
    "webkitFontFeatureSettings": "",
    "webkitFontSmoothing": "",
    "webkitHyphenateCharacter": "",
    "webkitJustifyContent": "",
    "webkitLineBreak": "",
    "webkitLineClamp": "",
    "webkitLocale": "",
    "webkitLogicalHeight": "",
    "webkitLogicalWidth": "",
    "webkitMarginAfter": "",
    "webkitMarginBefore": "",
    "webkitMarginEnd": "",
    "webkitMarginStart": "",
    "webkitMask": "",
    "webkitMaskBoxImage": "",
    "webkitMaskBoxImageOutset": "",
    "webkitMaskBoxImageRepeat": "",
    "webkitMaskBoxImageSlice": "",
    "webkitMaskBoxImageSource": "",
    "webkitMaskBoxImageWidth": "",
    "webkitMaskClip": "",
    "webkitMaskComposite": "",
    "webkitMaskImage": "",
    "webkitMaskOrigin": "",
    "webkitMaskPosition": "",
    "webkitMaskPositionX": "",
    "webkitMaskPositionY": "",
    "webkitMaskRepeat": "",
    "webkitMaskSize": "",
    "webkitMaxLogicalHeight": "",
    "webkitMaxLogicalWidth": "",
    "webkitMinLogicalHeight": "",
    "webkitMinLogicalWidth": "",
    "webkitOpacity": "",
    "webkitOrder": "",
    "webkitPaddingAfter": "",
    "webkitPaddingBefore": "",
    "webkitPaddingEnd": "",
    "webkitPaddingStart": "",
    "webkitPerspective": "",
    "webkitPerspectiveOrigin": "",
    "webkitPerspectiveOriginX": "",
    "webkitPerspectiveOriginY": "",
    "webkitPrintColorAdjust": "",
    "webkitRtlOrdering": "",
    "webkitRubyPosition": "",
    "webkitShapeImageThreshold": "",
    "webkitShapeMargin": "",
    "webkitShapeOutside": "",
    "webkitTapHighlightColor": "",
    "webkitTextCombine": "",
    "webkitTextDecorationsInEffect": "",
    "webkitTextEmphasis": "",
    "webkitTextEmphasisColor": "",
    "webkitTextEmphasisPosition": "",
    "webkitTextEmphasisStyle": "",
    "webkitTextFillColor": "",
    "webkitTextOrientation": "",
    "webkitTextSecurity": "",
    "webkitTextSizeAdjust": "",
    "webkitTextStroke": "",
    "webkitTextStrokeColor": "",
    "webkitTextStrokeWidth": "",
    "webkitTransform": "",
    "webkitTransformOrigin": "",
    "webkitTransformOriginX": "",
    "webkitTransformOriginY": "",
    "webkitTransformOriginZ": "",
    "webkitTransformStyle": "",
    "webkitTransition": "",
    "webkitTransitionDelay": "",
    "webkitTransitionDuration": "",
    "webkitTransitionProperty": "",
    "webkitTransitionTimingFunction": "",
    "webkitUserDrag": "",
    "webkitUserModify": "",
    "webkitUserSelect": "",
    "webkitWritingMode": "",
    "whiteSpace": "",
    "whiteSpaceCollapse": "",
    "widows": "",
    "width": "",
    "willChange": "",
    "wordBreak": "",
    "wordSpacing": "",
    "wordWrap": "",
    "writingMode": "",
    "x": "",
    "y": "",
    "zIndex": "",
    "zoom": ""
}
div = {
    getElementsByTagName: function (name) {
        console.log("div 调用方法: getElementsByTagName >>>> 参数 >>>>",name);
        if (name === "i") {
            return arr;
        }

    },
    innerHTML:'',
    style:style,
    setAttribute: function () {
        console.log('div 调用方法:', 'setAttribute >>>> 参数 >>>>',arguments);
    }
    ,
    addBehavior: function () {
        console.log('div 调用方法:', 'addBehavior >>>> 参数 >>>>',arguments);
    },
    save:undefined,
    load:undefined,
}
s_arr = []

navigator = {
    appCodeName:"Mozilla",
    appName:"Netscape",
    appVersion: "5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
    userAgent: "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
    webdriver: false,
    vendor: "Google Inc.",
    productSub: "20030107",
    platform: "Win32",
    language: "zh-CN",
    connection:{
        downlink: 10,
        effectiveType: "4g",
        onchange:null,
        rtt: 150,
        saveData: false,
    }
}

window.isFinite = function (s) {
    console.log('window 调用方法:', 'isFinite >>>> 参数 >>>>',s);
    }
window.innerHeight =3150
window.innerWidth = 980
window.outerHeight = 797
window.outerWidth = 248
head = {
    removeChild: function (s) {
        console.log('head 调用方法:', 'removeChild >>>> 参数 >>>>',s);
        if (s == script_2){
            return script_2
        }
        if (s == script_1){
            return script_1
        }
        return s

    },
    children:function (s) {
        console.log('head 调用方法:', 'children >>>> 参数 >>>>',s);
    },
    firstChild:function (s) {
        console.log('head 调用方法:', 'firstChild >>>> 参数 >>>>',s);
    },
    firstElementChild:function (s) {
        console.log('head 调用方法:', 'firstElementChild >>>> 参数 >>>>',s);
    },
    lastChild:function (s) {
        console.log('head 调用方法:', 'lastChild >>>> 参数 >>>>',s);
    },
    lastElementChild:function (s) {
        console.log('head 调用方法:', 'lastElementChild >>>> 参数 >>>>',s);
    },
    childNodes:function (s) {
        console.log('head 调用方法:', 'childNodes >>>> 参数 >>>>',s);
    },
    getElementsByTagName:function (s) {
        console.log('head 调用方法:', 'getElementsByTagName >>>> 参数 >>>>',s);
    },
    textContent:function (s) {
        console.log('head 调用方法:', 'textContent >>>> 参数 >>>>',s);
    }

}
setInterval= function (){}
setTimeout= function (){}
script_1 = {
    type: 'text/javascript',
    r:'m',
    innerHTML: '\'ts_js\'',
    getAttribute:function (s) {
        console.log ('script_1 调用方法:', 'getAttribute >>>> 参数 >>>>',s);
        if (s == 'r'){
            return 'm'
        }

    },
    parentElement:head,
}

script_2 = {
    type: 'text/javascript',
    charset:'utf-8',
    src: '/2s4zGdV7YYfO/mrIYzxIXPnJU.81fbd34.js',
    r:'m',
    parentElement:head,
    getAttribute:function (s) {
        console.log ('script_2 调用方法:', 'getAttribute >>>> 参数 >>>>',s);
        if (s == 'r'){
            return 'm'
        }

    }
}
s_arr.push(script_1,script_2)
meta ={
    getAttribute:function (s) {
        if (s == 'r'){
            return 'm'
        }
    },
    parentNode:head,
    content: content
}
a = {}
document = {
    createElement: function (name) {
        console.log("document 调用方法:", "createElement >>>> 参数>>>>", name);
        if (name === "div") {
            return div;
        }
        if (name == "a"){
            return a
        }
    },
    appendChild: function (name) {
        console.log("document 调用方法:", "appendChild >>>> 参数 >>>>", name);
    },
    removeChild: function (name) {
        console.log("document 调用方法:", "removeChild >>>> 参数 >>>> ", name);
    },
    getElementsByTagName: function (name) {
        console.log("document 调用方法:", "getElementsByTagName >>>> 参数 >>>>", name);
        if (name === "script") {
            return [s_arr[0], s_arr[1]];
        }
        if (name === "base") {
            return []
        }
    },
    getElementById:function(name){
        console.log("document 调用方法:", "getElementById >>>> 参数 >>>>", name);
         if(name=="qAx7NxyxCzEz"){
            return meta
         }
    }
}
document.visibilityState = 'visible'
documentElement ={}
document.addEventListener =function(){
    console.log('document 调用方法:', 'addEventListener >>>> 参数 >>>>',arguments);
}
document.documentElement = documentElement
document.all = undetectable
window.webkitRequestFileSystem = function(){}
Object.defineProperty(document.all,'length',{
    get : function (){
        return Object.keys(document.all).length
    }
})
history = {
    replaceState: function (s) {
        console.log('history 调用方法:', 'replaceState >>>> 参数 >>>>',s);
    },
}
CanvasRenderingContext2D = function () {
    console.log('window 调用方法:', 'CanvasRenderingContext2D >>>> 参数 >>>>',arguments);
}
p2 = {}


p2  = CanvasRenderingContext2D.prototype
HTMLCanvasElement = function () {
    console.log('window 调用方法:', 'HTMLCanvasElement >>>> 参数 >>>>',arguments);
}
p1 = {}
HTMLCanvasElement.prototype = p1

window.TEMPORARY= 0;

location = {
    "ancestorOrigins": {},
    "href": "https://www.haeea.cn/",
    "origin": "https://www.haeea.cn",
    "protocol": "https:",
    "host": "www.haeea.cn",
    "hostname": "www.haeea.cn",
    "port": "",
    "pathname": "/",
    "search": "",
    "hash": ""
}
navigator.webkitPersistentStorage = function () {
    console.log('navigator 调用方法:', 'webkitPersistentStorage >>>> 参数 >>>>',arguments);
}
chrome = {}
window.chrome = chrome
window.top = window;
window.self = window;
const proxyArray = ['window', 'document.prototype', 'Request','location', 'navigator','chrome', 'history', 'style','arr', 'screen','script','div','head','meta','open','MutationObserver','HTMLCanvasElement','CanvasRenderingContext2D','XMLHttpRequest','indexedDB','s_arr','script_1','script_2','DOMParser','documentElement','a','localStorage','sessionStorage','p1','p2'];
// getEnvironment(proxyArray);
// require('./d2')
'auto_js'
'ts_js'


// console.log(document.cookie);
// console.log(document.cookie.split(';')[0].split('=')[1].length);
function get_cookie(){
    return document.cookie
}


