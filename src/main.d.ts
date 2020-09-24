declare module 'looks-same-plus' {
    /**
     * The options passed to looksSame function
     */
    interface LooksSameOptions {
        /**
         * By default, it will detect only noticeable differences. If you wish to detect any difference, use strict options.
         */
        strict?: boolean;

        /**
         * You can also adjust the ΔE value that will be treated as error in non-strict mode.
         */
        tolerance?: number;

        /**
         * Some devices can have different proportion between physical and logical screen resolutions also known as pixel ratio.
         * Default value for this proportion is 1.
         * This param also affects the comparison result, so it can be set manually with pixelRatio option.
         */
        pixelRatio?: number;

       /**
         * Text caret in text input elements it is a pain for visual regression tasks, because it is always blinks.
         * These diffs will be ignored by default. You can use `ignoreCaret` option with `false` value to disable ignoring such diffs.
         * In that way text caret will be marked as diffs.
         */
        ignoreCaret?: boolean;

       /**
         * Some images has difference while comparing because of antialiasing.
         * These diffs will be ignored by default. You can use ignoreAntialiasing option with false value to disable ignoring such diffs.
         * In that way antialiased pixels will be marked as diffs.
         */
        ignoreAntialiasing?: boolean;

       /**
         * Sometimes the antialiasing algorithm can work incorrectly due to some features of the browser rendering engine.
         * Use the option antialiasingTolerance to make the algorithm less strict.
         * With this option you can specify the minimum difference in brightness (zero by default)
         * between the darkest/lightest pixel (which is adjacent to the antialiasing pixel) and theirs adjacent pixels.
         *
         * We recommend that you don't increase this value above 10. If you need to increase more than 10 then this is definitely not antialiasing.
         */
        antialiasingTolerance?: number;

        /**
         * Responsible for diff area which will be returned  when comparing images.
         * Diff bounds will contain the whole diff if stopOnFirstFail is false and only first diff pixel - otherwise.
         */
        stopOnFirstFail?: boolean;

        /**
         * Responsible for diff bounds clustering
         */
        shouldCluster?: boolean;

        /**
         * Radius for every diff cluster
         */
        clustersSize?: number;
    }

    type LooksSameCallback = (error: Error | null, result: LooksSameResult) => void;

    export = function looksSamePlus(img1: string, img2: string, opts?: LooksSameOptions, callback?: LooksSameCallback): Promise<void>;
}
