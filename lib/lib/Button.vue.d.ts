declare const _default: {
    name: string;
    props: {
        theme: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        disable: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    setup(props: any): {
        classes: import("vue").ComputedRef<{
            [x: string]: any;
        }>;
    };
};
export default _default;
