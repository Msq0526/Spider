
// 检测属性、方法是否在当前原型上，如果不在则显示undefined（正常浏览器返回undefined），如果在则显示打印信息
!function (){
// 重新定义Object.getOwnPropertyDescriptor方法
    const originalGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        debugger
        const descriptor = originalGetOwnPropertyDescriptor.apply(Object, [obj, prop]);
        if(obj.da_toString!=undefined){
            console.log(`获取了${obj.da_toString()}中的${prop}描述符=>`,descriptor)
            return descriptor;
        }
        console.log(`获取了对象中的${prop}描述符=>`,descriptor)
        return descriptor;

    };

// ----------------------------------------------//
    const originalGetOwnPropertyNames = Object.getOwnPropertyNames;
    Object.getOwnPropertyNames = function (obj) {
        if(obj.da_toString!=undefined){
            console.log(`触发Objoect.getOwnPropertyNames=>${obj.da_toString()}`)
            if(obj.da_toString()==='window'){
                return  ["0","Object","Function","Array","Number","parseFloat","parseInt","Infinity","NaN","undefined","Boolean","String","Symbol","Date","Promise","RegExp","Error","AggregateError","EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError","globalThis","JSON","Math","Intl","ArrayBuffer","Atomics","Uint8Array","Int8Array","Uint16Array","Int16Array","Uint32Array","Int32Array","BigUint64Array","BigInt64Array","Uint8ClampedArray","Float32Array","Float64Array","DataView","Map","BigInt","Set","WeakMap","WeakSet","Proxy","Reflect","FinalizationRegistry","WeakRef","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape","eval","isFinite","isNaN","console","Option","Image","Audio","webkitURL","webkitRTCPeerConnection","webkitMediaStream","WebKitMutationObserver","WebKitCSSMatrix","XSLTProcessor","XPathResult","XPathExpression","XPathEvaluator","XMLSerializer","XMLHttpRequestUpload","XMLHttpRequestEventTarget","XMLHttpRequest","XMLDocument","WritableStreamDefaultWriter","WritableStreamDefaultController","WritableStream","Worker","WindowControlsOverlayGeometryChangeEvent","WindowControlsOverlay","Window","WheelEvent","WebSocket","WebGLVertexArrayObject","WebGLUniformLocation","WebGLTransformFeedback","WebGLTexture","WebGLSync","WebGLShaderPrecisionFormat","WebGLShader","WebGLSampler","WebGLRenderingContext","WebGLRenderbuffer","WebGLQuery","WebGLProgram","WebGLObject","WebGLFramebuffer","WebGLContextEvent","WebGLBuffer","WebGLActiveInfo","WebGL2RenderingContext","WaveShaperNode","VisualViewport","VisibilityStateEntry","VirtualKeyboardGeometryChangeEvent","ViewTransitionTypeSet","ViewTransition","ViewTimeline","VideoPlaybackQuality","VideoFrame","VideoColorSpace","ValidityState","VTTCue","UserActivation","URLSearchParams","URLPattern","URL","UIEvent","TrustedTypePolicyFactory","TrustedTypePolicy","TrustedScriptURL","TrustedScript","TrustedHTML","TreeWalker","TransitionEvent","TransformStreamDefaultController","TransformStream","TrackEvent","TouchList","TouchEvent","Touch","ToggleEvent","TimeRanges","TextUpdateEvent","TextTrackList","TextTrackCueList","TextTrackCue","TextTrack","TextMetrics","TextFormatUpdateEvent","TextFormat","TextEvent","TextEncoderStream","TextEncoder","TextDecoderStream","TextDecoder","Text","TaskSignal","TaskPriorityChangeEvent","TaskController","TaskAttributionTiming","SyncManager","SubmitEvent","StyleSheetList","StyleSheet","StylePropertyMapReadOnly","StylePropertyMap","StorageEvent","Storage","StereoPannerNode","StaticRange","SourceBufferList","SourceBuffer","ShadowRoot","Selection","SecurityPolicyViolationEvent","ScrollTimeline","ScriptProcessorNode","ScreenOrientation","Screen","Scheduling","Scheduler","SVGViewElement","SVGUseElement","SVGUnitTypes","SVGTransformList","SVGTransform","SVGTitleElement","SVGTextPositioningElement","SVGTextPathElement","SVGTextElement","SVGTextContentElement","SVGTSpanElement","SVGSymbolElement","SVGSwitchElement","SVGStyleElement","SVGStringList","SVGStopElement","SVGSetElement","SVGScriptElement","SVGSVGElement","SVGRectElement","SVGRect","SVGRadialGradientElement","SVGPreserveAspectRatio","SVGPolylineElement","SVGPolygonElement","SVGPointList","SVGPoint","SVGPatternElement","SVGPathElement","SVGNumberList","SVGNumber","SVGMetadataElement","SVGMatrix","SVGMaskElement","SVGMarkerElement","SVGMPathElement","SVGLinearGradientElement","SVGLineElement","SVGLengthList","SVGLength","SVGImageElement","SVGGraphicsElement","SVGGradientElement","SVGGeometryElement","SVGGElement","SVGForeignObjectElement","SVGFilterElement","SVGFETurbulenceElement","SVGFETileElement","SVGFESpotLightElement","SVGFESpecularLightingElement","SVGFEPointLightElement","SVGFEOffsetElement","SVGFEMorphologyElement","SVGFEMergeNodeElement","SVGFEMergeElement","SVGFEImageElement","SVGFEGaussianBlurElement","SVGFEFuncRElement","SVGFEFuncGElement","SVGFEFuncBElement","SVGFEFuncAElement","SVGFEFloodElement","SVGFEDropShadowElement","SVGFEDistantLightElement","SVGFEDisplacementMapElement","SVGFEDiffuseLightingElement","SVGFEConvolveMatrixElement","SVGFECompositeElement","SVGFEComponentTransferElement","SVGFEColorMatrixElement","SVGFEBlendElement","SVGEllipseElement","SVGElement","SVGDescElement","SVGDefsElement","SVGComponentTransferFunctionElement","SVGClipPathElement","SVGCircleElement","SVGAnimationElement","SVGAnimatedTransformList","SVGAnimatedString","SVGAnimatedRect","SVGAnimatedPreserveAspectRatio","SVGAnimatedNumberList","SVGAnimatedNumber","SVGAnimatedLengthList","SVGAnimatedLength","SVGAnimatedInteger","SVGAnimatedEnumeration","SVGAnimatedBoolean","SVGAnimatedAngle","SVGAnimateTransformElement","SVGAnimateMotionElement","SVGAnimateElement","SVGAngle","SVGAElement","Response","ResizeObserverSize","ResizeObserverEntry","ResizeObserver","Request","ReportingObserver","ReportBody","ReadableStreamDefaultReader","ReadableStreamDefaultController","ReadableStreamBYOBRequest","ReadableStreamBYOBReader","ReadableStream","ReadableByteStreamController","Range","RadioNodeList","RTCTrackEvent","RTCStatsReport","RTCSessionDescription","RTCSctpTransport","RTCRtpTransceiver","RTCRtpSender","RTCRtpReceiver","RTCPeerConnectionIceEvent","RTCPeerConnectionIceErrorEvent","RTCPeerConnection","RTCIceTransport","RTCIceCandidate","RTCErrorEvent","RTCError","RTCEncodedVideoFrame","RTCEncodedAudioFrame","RTCDtlsTransport","RTCDataChannelEvent","RTCDTMFToneChangeEvent","RTCDTMFSender","RTCCertificate","PromiseRejectionEvent","ProgressEvent","Profiler","ProcessingInstruction","PopStateEvent","PointerEvent","PluginArray","Plugin","PictureInPictureWindow","PictureInPictureEvent","PeriodicWave","PerformanceTiming","PerformanceServerTiming","PerformanceScriptTiming","PerformanceResourceTiming","PerformancePaintTiming","PerformanceObserverEntryList","PerformanceObserver","PerformanceNavigationTiming","PerformanceNavigation","PerformanceMeasure","PerformanceMark","PerformanceLongTaskTiming","PerformanceLongAnimationFrameTiming","PerformanceEventTiming","PerformanceEntry","PerformanceElementTiming","Performance","Path2D","PannerNode","PageTransitionEvent","OverconstrainedError","OscillatorNode","OffscreenCanvasRenderingContext2D","OffscreenCanvas","OfflineAudioContext","OfflineAudioCompletionEvent","NodeList","NodeIterator","NodeFilter","Node","NetworkInformation","NavigatorUAData","Navigator","NavigationTransition","NavigationHistoryEntry","NavigationDestination","NavigationCurrentEntryChangeEvent","Navigation","NavigateEvent","NamedNodeMap","MutationRecord","MutationObserver","MouseEvent","MimeTypeArray","MimeType","MessagePort","MessageEvent","MessageChannel","MediaStreamTrackVideoStats","MediaStreamTrackProcessor","MediaStreamTrackGenerator","MediaStreamTrackEvent","MediaStreamTrackAudioStats","MediaStreamTrack","MediaStreamEvent","MediaStreamAudioSourceNode","MediaStreamAudioDestinationNode","MediaStream","MediaSourceHandle","MediaSource","MediaRecorder","MediaQueryListEvent","MediaQueryList","MediaList","MediaError","MediaEncryptedEvent","MediaElementAudioSourceNode","MediaCapabilities","MathMLElement","Location","LayoutShiftAttribution","LayoutShift","LargestContentfulPaint","KeyframeEffect","KeyboardEvent","IntersectionObserverEntry","IntersectionObserver","InputEvent","InputDeviceInfo","InputDeviceCapabilities","Ink","ImageData","ImageCapture","ImageBitmapRenderingContext","ImageBitmap","IdleDeadline","IIRFilterNode","IDBVersionChangeEvent","IDBTransaction","IDBRequest","IDBOpenDBRequest","IDBObjectStore","IDBKeyRange","IDBIndex","IDBFactory","IDBDatabase","IDBCursorWithValue","IDBCursor","History","HighlightRegistry","Highlight","Headers","HashChangeEvent","HTMLVideoElement","HTMLUnknownElement","HTMLUListElement","HTMLTrackElement","HTMLTitleElement","HTMLTimeElement","HTMLTextAreaElement","HTMLTemplateElement","HTMLTableSectionElement","HTMLTableRowElement","HTMLTableElement","HTMLTableColElement","HTMLTableCellElement","HTMLTableCaptionElement","HTMLStyleElement","HTMLSpanElement","HTMLSourceElement","HTMLSlotElement","HTMLSelectElement","HTMLScriptElement","HTMLQuoteElement","HTMLProgressElement","HTMLPreElement","HTMLPictureElement","HTMLParamElement","HTMLParagraphElement","HTMLOutputElement","HTMLOptionsCollection","HTMLOptionElement","HTMLOptGroupElement","HTMLObjectElement","HTMLOListElement","HTMLModElement","HTMLMeterElement","HTMLMetaElement","HTMLMenuElement","HTMLMediaElement","HTMLMarqueeElement","HTMLMapElement","HTMLLinkElement","HTMLLegendElement","HTMLLabelElement","HTMLLIElement","HTMLInputElement","HTMLImageElement","HTMLIFrameElement","HTMLHtmlElement","HTMLHeadingElement","HTMLHeadElement","HTMLHRElement","HTMLFrameSetElement","HTMLFrameElement","HTMLFormElement","HTMLFormControlsCollection","HTMLFontElement","HTMLFieldSetElement","HTMLEmbedElement","HTMLElement","HTMLDocument","HTMLDivElement","HTMLDirectoryElement","HTMLDialogElement","HTMLDetailsElement","HTMLDataListElement","HTMLDataElement","HTMLDListElement","HTMLCollection","HTMLCanvasElement","HTMLButtonElement","HTMLBodyElement","HTMLBaseElement","HTMLBRElement","HTMLAudioElement","HTMLAreaElement","HTMLAnchorElement","HTMLAllCollection","GeolocationPositionError","GeolocationPosition","GeolocationCoordinates","Geolocation","GamepadHapticActuator","GamepadEvent","GamepadButton","Gamepad","GainNode","FormDataEvent","FormData","FontFaceSetLoadEvent","FontFace","FocusEvent","FileReader","FileList","File","FeaturePolicy","External","EventTarget","EventSource","EventCounts","Event","ErrorEvent","EncodedVideoChunk","EncodedAudioChunk","ElementInternals","Element","EditContext","DynamicsCompressorNode","DragEvent","DocumentType","DocumentTimeline","DocumentFragment","Document","DelegatedInkTrailPresenter","DelayNode","DecompressionStream","DataTransferItemList","DataTransferItem","DataTransfer","DOMTokenList","DOMStringMap","DOMStringList","DOMRectReadOnly","DOMRectList","DOMRect","DOMQuad","DOMPointReadOnly","DOMPoint","DOMParser","DOMMatrixReadOnly","DOMMatrix","DOMImplementation","DOMException","DOMError","CustomStateSet","CustomEvent","CustomElementRegistry","Crypto","CountQueuingStrategy","ConvolverNode","ContentVisibilityAutoStateChangeEvent","ConstantSourceNode","CompressionStream","CompositionEvent","Comment","CloseWatcher","CloseEvent","ClipboardEvent","CharacterData","CharacterBoundsUpdateEvent","ChannelSplitterNode","ChannelMergerNode","CanvasRenderingContext2D","CanvasPattern","CanvasGradient","CanvasCaptureMediaStreamTrack","CSSVariableReferenceValue","CSSUnparsedValue","CSSUnitValue","CSSTranslate","CSSTransition","CSSTransformValue","CSSTransformComponent","CSSSupportsRule","CSSStyleValue","CSSStyleSheet","CSSStyleRule","CSSStyleDeclaration","CSSStartingStyleRule","CSSSkewY","CSSSkewX","CSSSkew","CSSScopeRule","CSSScale","CSSRuleList","CSSRule","CSSRotate","CSSPropertyRule","CSSPositionValue","CSSPositionTryRule","CSSPositionTryDescriptors","CSSPerspective","CSSPageRule","CSSNumericValue","CSSNumericArray","CSSNestedDeclarations","CSSNamespaceRule","CSSMediaRule","CSSMatrixComponent","CSSMathValue","CSSMathSum","CSSMathProduct","CSSMathNegate","CSSMathMin","CSSMathMax","CSSMathInvert","CSSMathClamp","CSSLayerStatementRule","CSSLayerBlockRule","CSSKeywordValue","CSSKeyframesRule","CSSKeyframeRule","CSSImportRule","CSSImageValue","CSSGroupingRule","CSSFontPaletteValuesRule","CSSFontFaceRule","CSSCounterStyleRule","CSSContainerRule","CSSConditionRule","CSSAnimation","CSS","CSPViolationReportBody","CDATASection","ByteLengthQueuingStrategy","BrowserCaptureMediaStreamTrack","BroadcastChannel","BlobEvent","Blob","BiquadFilterNode","BeforeUnloadEvent","BeforeInstallPromptEvent","BaseAudioContext","BarProp","AudioWorkletNode","AudioSinkInfo","AudioScheduledSourceNode","AudioProcessingEvent","AudioParamMap","AudioParam","AudioNode","AudioListener","AudioDestinationNode","AudioData","AudioContext","AudioBufferSourceNode","AudioBuffer","Attr","AnimationTimeline","AnimationPlaybackEvent","AnimationEvent","AnimationEffect","Animation","AnalyserNode","AbstractRange","AbortSignal","AbortController","window","self","document","name","location","customElements","history","navigation","locationbar","menubar","personalbar","scrollbars","statusbar","toolbar","status","closed","frames","length","top","opener","parent","frameElement","navigator","origin","external","screen","innerWidth","innerHeight","scrollX","pageXOffset","scrollY","pageYOffset","visualViewport","screenX","screenY","outerWidth","outerHeight","devicePixelRatio","event","clientInformation","offscreenBuffering","screenLeft","screenTop","styleMedia","onsearch","trustedTypes","performance","onappinstalled","onbeforeinstallprompt","crypto","indexedDB","sessionStorage","localStorage","onbeforexrselect","onabort","onbeforeinput","onbeforematch","onbeforetoggle","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontentvisibilityautostatechange","oncontextlost","oncontextmenu","oncontextrestored","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","onformdata","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onresize","onscroll","onsecuritypolicyviolation","onseeked","onseeking","onselect","onslotchange","onstalled","onsubmit","onsuspend","ontimeupdate","ontoggle","onvolumechange","onwaiting","onwebkitanimationend","onwebkitanimationiteration","onwebkitanimationstart","onwebkittransitionend","onwheel","onauxclick","ongotpointercapture","onlostpointercapture","onpointerdown","onpointermove","onpointerrawupdate","onpointerup","onpointercancel","onpointerover","onpointerout","onpointerenter","onpointerleave","onselectstart","onselectionchange","onanimationend","onanimationiteration","onanimationstart","ontransitionrun","ontransitionstart","ontransitionend","ontransitioncancel","onafterprint","onbeforeprint","onbeforeunload","onhashchange","onlanguagechange","onmessage","onmessageerror","onoffline","ononline","onpagehide","onpageshow","onpopstate","onrejectionhandled","onstorage","onunhandledrejection","onunload","isSecureContext","crossOriginIsolated","scheduler","alert","atob","blur","btoa","cancelAnimationFrame","cancelIdleCallback","captureEvents","clearInterval","clearTimeout","close","confirm","createImageBitmap","fetch","find","focus","getComputedStyle","getSelection","matchMedia","moveBy","moveTo","open","postMessage","print","prompt","queueMicrotask","releaseEvents","reportError","requestAnimationFrame","requestIdleCallback","resizeBy","resizeTo","scroll","scrollBy","scrollTo","setInterval","setTimeout","stop","structuredClone","webkitCancelAnimationFrame","webkitRequestAnimationFrame","Iterator","chrome","WebAssembly","caches","cookieStore","ondevicemotion","ondeviceorientation","ondeviceorientationabsolute","launchQueue","sharedStorage","documentPictureInPicture","ontouchcancel","ontouchend","ontouchmove","ontouchstart","AICreateMonitor","AbsoluteOrientationSensor","Accelerometer","AudioDecoder","AudioEncoder","AudioWorklet","BatteryManager","Cache","CacheStorage","Clipboard","ClipboardItem","CookieChangeEvent","CookieStore","CookieStoreManager","Credential","CredentialsContainer","CryptoKey","DeviceMotionEvent","DeviceMotionEventAcceleration","DeviceMotionEventRotationRate","DeviceOrientationEvent","FederatedCredential","GPU","GPUAdapter","GPUAdapterInfo","GPUBindGroup","GPUBindGroupLayout","GPUBuffer","GPUBufferUsage","GPUCanvasContext","GPUColorWrite","GPUCommandBuffer","GPUCommandEncoder","GPUCompilationInfo","GPUCompilationMessage","GPUComputePassEncoder","GPUComputePipeline","GPUDevice","GPUDeviceLostInfo","GPUError","GPUExternalTexture","GPUInternalError","GPUMapMode","GPUOutOfMemoryError","GPUPipelineError","GPUPipelineLayout","GPUQuerySet","GPUQueue","GPURenderBundle","GPURenderBundleEncoder","GPURenderPassEncoder","GPURenderPipeline","GPUSampler","GPUShaderModule","GPUShaderStage","GPUSupportedFeatures","GPUSupportedLimits","GPUTexture","GPUTextureUsage","GPUTextureView","GPUUncapturedErrorEvent","GPUValidationError","GravitySensor","Gyroscope","IdleDetector","ImageDecoder","ImageTrack","ImageTrackList","Keyboard","KeyboardLayoutMap","LinearAccelerationSensor","MIDIAccess","MIDIConnectionEvent","MIDIInput","MIDIInputMap","MIDIMessageEvent","MIDIOutput","MIDIOutputMap","MIDIPort","MediaDeviceInfo","MediaDevices","MediaKeyMessageEvent","MediaKeySession","MediaKeyStatusMap","MediaKeySystemAccess","MediaKeys","NavigationPreloadManager","NavigatorManagedData","OrientationSensor","PasswordCredential","ProtectedAudience","RelativeOrientationSensor","ScreenDetailed","ScreenDetails","Sensor","SensorErrorEvent","ServiceWorker","ServiceWorkerContainer","ServiceWorkerRegistration","StorageManager","SubtleCrypto","VideoDecoder","VideoEncoder","VirtualKeyboard","WGSLLanguageFeatures","WebTransport","WebTransportBidirectionalStream","WebTransportDatagramDuplexStream","WebTransportError","Worklet","XRDOMOverlayState","XRLayer","XRWebGLBinding","AuthenticatorAssertionResponse","AuthenticatorAttestationResponse","AuthenticatorResponse","PublicKeyCredential","Bluetooth","BluetoothCharacteristicProperties","BluetoothDevice","BluetoothRemoteGATTCharacteristic","BluetoothRemoteGATTDescriptor","BluetoothRemoteGATTServer","BluetoothRemoteGATTService","CaptureController","DevicePosture","DocumentPictureInPicture","EyeDropper","FileSystemDirectoryHandle","FileSystemFileHandle","FileSystemHandle","FileSystemWritableFileStream","FileSystemObserver","FontData","FragmentDirective","HID","HIDConnectionEvent","HIDDevice","HIDInputReportEvent","IdentityCredential","IdentityProvider","IdentityCredentialError","LaunchParams","LaunchQueue","Lock","LockManager","NavigatorLogin","NotRestoredReasonDetails","NotRestoredReasons","OTPCredential","PaymentAddress","PaymentRequest","PaymentRequestUpdateEvent","PaymentResponse","PaymentManager","PaymentMethodChangeEvent","Presentation","PresentationAvailability","PresentationConnection","PresentationConnectionAvailableEvent","PresentationConnectionCloseEvent","PresentationConnectionList","PresentationReceiver","PresentationRequest","PressureObserver","PressureRecord","Serial","SerialPort","StorageBucket","StorageBucketManager","USB","USBAlternateInterface","USBConfiguration","USBConnectionEvent","USBDevice","USBEndpoint","USBInTransferResult","USBInterface","USBIsochronousInTransferPacket","USBIsochronousInTransferResult","USBIsochronousOutTransferPacket","USBIsochronousOutTransferResult","USBOutTransferResult","WakeLock","WakeLockSentinel","XRAnchor","XRAnchorSet","XRBoundedReferenceSpace","XRCPUDepthInformation","XRCamera","XRDepthInformation","XRFrame","XRHitTestResult","XRHitTestSource","XRInputSource","XRInputSourceArray","XRInputSourceEvent","XRInputSourcesChangeEvent","XRLightEstimate","XRLightProbe","XRPose","XRRay","XRReferenceSpace","XRReferenceSpaceEvent","XRRenderState","XRRigidTransform","XRSession","XRSessionEvent","XRSpace","XRSystem","XRTransientInputHitTestResult","XRTransientInputHitTestSource","XRView","XRViewerPose","XRViewport","XRWebGLDepthInformation","XRWebGLLayer","XRHand","XRJointPose","XRJointSpace","getScreenDetails","queryLocalFonts","showDirectoryPicker","showOpenFilePicker","showSaveFilePicker","originAgentCluster","onorientationchange","orientation","onpageswap","onpagereveal","credentialless","fence","speechSynthesis","onscrollend","onscrollsnapchange","onscrollsnapchanging","BackgroundFetchManager","BackgroundFetchRecord","BackgroundFetchRegistration","BluetoothUUID","CSSMarginRule","CSSViewTransitionRule","CaretPosition","ChapterInformation","CropTarget","DocumentPictureInPictureEvent","Fence","FencedFrameConfig","HTMLFencedFrameElement","MediaMetadata","MediaSession","NavigationActivation","Notification","PageRevealEvent","PageSwapEvent","PeriodicSyncManager","PermissionStatus","Permissions","PushManager","PushSubscription","PushSubscriptionOptions","RTCDataChannel","RemotePlayback","RestrictionTarget","SharedStorage","SharedStorageWorklet","SharedWorker","SnapEvent","SpeechSynthesis","SpeechSynthesisErrorEvent","SpeechSynthesisEvent","SpeechSynthesisUtterance","SpeechSynthesisVoice","WebSocketError","WebSocketStream","webkitSpeechGrammar","webkitSpeechGrammarList","webkitSpeechRecognition","webkitSpeechRecognitionError","webkitSpeechRecognitionEvent","webkitRequestFileSystem","webkitResolveLocalFileSystemURL","isSSREnabled","_ssrHeaderTime","_pageTimings","NONCE_ID","getCookieConsentRequired","_ssrServiceEntryUrl","_webWorkerBundle","_authCookieName","trustedTypePolicies","webWorker","webWorkerMessages","webWorkerErrors","onErrorHandler","trustedTypesURLValidation","OneTrustStub","OnetrustActiveGroups","OptanonActiveGroups","dataLayer","setLiteTelemetryContract","sendLitePV","searchFormSubmitListener","sendAdBeacon","ssrLoadedExperience","ssrLoadedBundles","publishLoadedBundles","updateIdxId","markTTSR","swFeatTmplContents","isResized","ssrExtensionLoaded","appendProtocolQSP","appendScript","oneDSConfig","__peregrine_litePVSent","ssrCpuCost","isSSRCompleted","edgeNTPHeader","ssrAdData","ssrRenderDuration","ssrSizes","servedBeaconUrls","adsListened","__tcfapi","otStubData","edgeChromiumWebpackChunks","otTCF","otIabModule","Optanon","OneTrust","viewedBeaconUrls","FAST","__sapphirePeregrineState","_isWebWorkerPresent","_getEntityMetricsCollection","__dynProto$Gbl","telemetryEventsClear","telemetryEventsFlush","_getValidationResults","_getWholePageValidationResults","_telemetryValidationEnabled","_getAppPerfTrace","_aiDataEvents_2_8_92_ZEbguL","MSANTracker","Gemini","shouldResetDwellTimer","$$container$$","createWindowsWidget1SAuthHeaders","_secondaryPageTimings","__theme","AllAds","_webVitalsPageTimings","isHydrationCompleted","dir","dirxml","profile","profileEnd","clear","table","keys","values","debug","undebug","monitor","unmonitor","inspect","copy","queryObjects","$_","$0","$1","$2","$3","$4","getEventListeners","getAccessibleName","getAccessibleRole","monitorEvents","unmonitorEvents","$","$$","$x"]
            }
            if(obj.da_toString()==='document'){
                return  ["location", "__tcfapiLocator", "_aiDataEvents_2_8_92_ZEbguL"]
            }
            if(obj.da_toString()==='navigator'){
                return  []
            }
            if(obj.da_toString()==='location'){
                return  ["valueOf","ancestorOrigins","href","origin","protocol","host","hostname","port","pathname","search","hash","assign","reload","replace","toString"]
            }
            if(obj.da_toString()==='localStorage'){
                return  ["valueOf","ancestorOrigins","href","origin","protocol","host","hostname","port","pathname","search","hash","assign","reload","replace","toString"]
            }
            if(obj.da_toString()==='screen'){
                return  []
            }

            const propertyNames = originalGetOwnPropertyNames.call(Object, obj);
            const filteredNames = propertyNames.filter(name => name !== 'hiddenProp');
            return filteredNames;

        }
        console.log("触发Objoect.getOwnPropertyNames调用")
        const propertyNames = originalGetOwnPropertyNames.call(Object, obj);
        const filteredNames = propertyNames.filter(name => name !== 'hiddenProp');
        return filteredNames;
    }
// ----------------------------------------------//
    const originalObjectKeys = Object.keys;
    Object.keys = function (obj) {
        if(obj.da_toString!=undefined){
            console.log(`触发Object.keys=>${obj.da_toString()}`)
            if(obj.da_toString()==='window'){
                return  ["0","window","self","document","name","location","customElements","history","navigation","locationbar","menubar","personalbar","scrollbars","statusbar","toolbar","status","closed","frames","length","top","opener","parent","frameElement","navigator","origin","external","screen","innerWidth","innerHeight","scrollX","pageXOffset","scrollY","pageYOffset","visualViewport","screenX","screenY","outerWidth","outerHeight","devicePixelRatio","event","clientInformation","screenLeft","screenTop","styleMedia","onsearch","trustedTypes","performance","onappinstalled","onbeforeinstallprompt","crypto","indexedDB","sessionStorage","localStorage","onbeforexrselect","onabort","onbeforeinput","onbeforematch","onbeforetoggle","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontentvisibilityautostatechange","oncontextlost","oncontextmenu","oncontextrestored","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","onformdata","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onresize","onscroll","onsecuritypolicyviolation","onseeked","onseeking","onselect","onslotchange","onstalled","onsubmit","onsuspend","ontimeupdate","ontoggle","onvolumechange","onwaiting","onwebkitanimationend","onwebkitanimationiteration","onwebkitanimationstart","onwebkittransitionend","onwheel","onauxclick","ongotpointercapture","onlostpointercapture","onpointerdown","onpointermove","onpointerrawupdate","onpointerup","onpointercancel","onpointerover","onpointerout","onpointerenter","onpointerleave","onselectstart","onselectionchange","onanimationend","onanimationiteration","onanimationstart","ontransitionrun","ontransitionstart","ontransitionend","ontransitioncancel","onafterprint","onbeforeprint","onbeforeunload","onhashchange","onlanguagechange","onmessage","onmessageerror","onoffline","ononline","onpagehide","onpageshow","onpopstate","onrejectionhandled","onstorage","onunhandledrejection","onunload","isSecureContext","crossOriginIsolated","scheduler","alert","atob","blur","btoa","cancelAnimationFrame","cancelIdleCallback","captureEvents","clearInterval","clearTimeout","close","confirm","createImageBitmap","fetch","find","focus","getComputedStyle","getSelection","matchMedia","moveBy","moveTo","open","postMessage","print","prompt","queueMicrotask","releaseEvents","reportError","requestAnimationFrame","requestIdleCallback","resizeBy","resizeTo","scroll","scrollBy","scrollTo","setInterval","setTimeout","stop","structuredClone","webkitCancelAnimationFrame","webkitRequestAnimationFrame","chrome","caches","cookieStore","ondevicemotion","ondeviceorientation","ondeviceorientationabsolute","launchQueue","sharedStorage","documentPictureInPicture","ontouchcancel","ontouchend","ontouchmove","ontouchstart","getScreenDetails","queryLocalFonts","showDirectoryPicker","showOpenFilePicker","showSaveFilePicker","originAgentCluster","onorientationchange","orientation","onpageswap","onpagereveal","credentialless","fence","speechSynthesis","onscrollend","onscrollsnapchange","onscrollsnapchanging","webkitRequestFileSystem","webkitResolveLocalFileSystemURL","isSSREnabled","_ssrHeaderTime","_pageTimings","NONCE_ID","getCookieConsentRequired","_ssrServiceEntryUrl","_webWorkerBundle","_authCookieName","trustedTypePolicies","webWorker","webWorkerMessages","webWorkerErrors","onErrorHandler","trustedTypesURLValidation","OneTrustStub","OnetrustActiveGroups","OptanonActiveGroups","dataLayer","setLiteTelemetryContract","sendLitePV","searchFormSubmitListener","sendAdBeacon","ssrLoadedExperience","ssrLoadedBundles","publishLoadedBundles","updateIdxId","markTTSR","swFeatTmplContents","isResized","ssrExtensionLoaded","appendProtocolQSP","appendScript","oneDSConfig","__peregrine_litePVSent","ssrCpuCost","isSSRCompleted","edgeNTPHeader","ssrAdData","ssrRenderDuration","ssrSizes","servedBeaconUrls","adsListened","__tcfapi","otStubData","edgeChromiumWebpackChunks","otTCF","otIabModule","Optanon","OneTrust","viewedBeaconUrls","__sapphirePeregrineState","_isWebWorkerPresent","_getEntityMetricsCollection","__dynProto$Gbl","telemetryEventsClear","telemetryEventsFlush","_getValidationResults","_getWholePageValidationResults","_telemetryValidationEnabled","_getAppPerfTrace","MSANTracker","Gemini","shouldResetDwellTimer","$$container$$","createWindowsWidget1SAuthHeaders","_secondaryPageTimings","__theme","AllAds","_webVitalsPageTimings","isHydrationCompleted","_weatherNotRendered"]
            }
            if(obj.da_toString()==='document'){
                return  ["location", "__tcfapiLocator"]
            }
            if(obj.da_toString()==='navigator'){
                return  []
            }
            if(obj.da_toString()==='location'){
                return  ["ancestorOrigins","href","origin","protocol","host","hostname","port","pathname","search","hash","assign","reload","replace","toString"]

            }
            if(obj.da_toString()==='localStorage'){
                return  ["sai_ntp","pivotSelectionSource","isGAShow","nurturing_interaction_trace_ls_id","pageVersions","bkgdV","wpo_data_ adult_zh_cn_ntp_edgeChromium","LastKnownPV","enableUndersideAutoOpenFromEdge","weaRecentLocation","at-bing","sai_dhp","1adcoords_date","authRecordTrail","ssrBasePageCachingFeatureActive","1adindices","LastVisuallyReadyMarker","MUID","CookieSyncExpiry","FallbackNavigationResult","clean_meta_flag","1adcoords","1adindices_date","switchedPivot","wpo_data_ adult_zh_cn_dhp_edgeChromium","at-bing-dt","isCoordsCacheInvalid","selectedPivot","oneSvcUniTunMode"]
            }
            if(obj.da_toString()==='screen'){
                return  []
            }

            const keys = originalObjectKeys.call(Object, obj);
            return keys;

        }
        console.log(`触发Object.keys=>`)
        const keys = originalObjectKeys.call(Object, obj);
        return keys;

    }
// ----------------------------------------------//
    const originalToString = Function.prototype.toString;
    Function.prototype.toString = function () {
        if(originalToString.apply(this).length>20){
            console.log(`发现调用了toString-->`,'太大无法输出');
            // debugger
            return originalToString.apply(this);

        }
        console.log(`发现调用了toString-->`,originalToString.apply(this));
        // debugger
        return originalToString.apply(this);
    };

}(this)

//代理函数
function watch(obj,name){
    console_log= console.log
    return new Proxy(obj,{
        get(target, p, receiver) {
            if(p===Symbol.toPrimitive||p===Symbol.toStringTag||p==="Math"||p==="isNaN"||p==="encodeURI"||p==="Uint8Array"){

                return Reflect.get(target, p, receiver);
            }else {

                let  vel = Reflect.get(...arguments)
                if((typeof vel) ==='object'){
                    console_log('取值:',name,'.',p,'=>',typeof vel)
                    return Reflect.get(target, p, receiver);
                }
                if(p==='cookie'){
                    debugger
                }
                if(p==='da_toString'){
                    return Reflect.get(target, p, receiver);
                }
                console_log('取值:',name,'.',p,'=>',vel)
                return Reflect.get(target, p, receiver);
            }
        },
        set(target, p, newValue, receiver) {
            let val = Reflect.get(...arguments)
            console_log(`设置值${name}.${p},${val}=>${newValue}`)
            return Reflect.set(target, p, newValue, receiver);
        }   ,
        has(target, p) {
            console_log(`in检测:${"'"+p+"'"} in ${name}=>>${p in target}`)
            return Reflect.has(target, p);
        },
        deleteProperty(target, p) {
            console_log(`删除了${name}中的${p}`)
            return Reflect.deleteProperty(target, p);

        },
        ownKeys(target) {
            console.log(`正在获取${name}对象的自有属性键`);
            return Reflect.ownKeys(target);
        },
        // getOwnPropertyDescriptor(target, p) {
        //     console.log(`获取了${name}中的${p}属性的描述符`);
        //     return Reflect.getOwnPropertyDescriptor(target, p);
        //
        // },
        // defineProperty(target, property, descriptor) {
        //     return Reflect.defineProperty(target, property, descriptor);
        // },
        getPrototypeOf(target) {
            console.log(`利用getPrototypeOf获取${name}对象中的原型链属性`);
            return  Reflect.getPrototypeOf(target);
        },
        // preventExtensions(target) {
        //     return Reflect.preventExtensions(target);
        // },
        // isExtensible(target) {
        //     return Reflect.isExtensible(target);
        // },
        // setPrototypeOf(target, prototype) {
        //     console.log(`利用setPrototypeOf设置了${name}中的设置了原型链对象属性`);
        //     return Reflect.setPrototypeOf(target, prototype);;
        // },
        apply(target, thisArg, args) {
            console.log(`${name}方法接收了`,args);
            return Reflect.apply(target, thisArg, args);
        },
        construct(target, args, newTarget) {
            console.log(`${name}方法构造参数接收了`,args);
            return  Reflect.construct(target, args, newTarget);
        }
    })
}


//代理函数得方法
function makeFun(name) {
    //方法保护
    func = function () {
        console.log(`${name}-->`,arguments)
    };
    Object.defineProperty(func, 'name', { value: name });
    ps={}
    ps=watch(ps,`${name}.prototype`)
    func.prototype=ps
    func= watch(func,`${name}`)
    return func
}

navigator={
    da_toString:function (){
        return 'navigator'
    },
    credentials:watch({},'navigator.credentials'),
    userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0'
}
//使用示例
navigator=watch(navigator,'navigator')
XMLHttpRequest=makeFun('XMLHttpRequest')


//模拟调用
navigator.userAgent
ps= navigator.credentials
ps.data
XMLHttpRequest.name
XMLHttpRequest.prototype.aaa
Object.getOwnPropertyDescriptor(navigator,'userAgent')
