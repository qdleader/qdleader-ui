declare const _default: {
    name: string;
    props: {
        title: {
            type: StringConstructor;
            default: string;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeOnClickOverlay: {
            type: BooleanConstructor;
            default: boolean;
        };
        ok: {
            type: FunctionConstructor;
        };
        cancel: {
            type: FunctionConstructor;
        };
    };
    components: {
        Button: import("vue").ComponentOptions<{}, any, any, any, any, any, any, any>;
    };
    setup(props: any, context: any): {
        ok: () => void;
        cancel: () => void;
        onClickOverlay: () => void;
        close: () => void;
    };
};
export default _default;
