declare const _default: {
    name: string;
    props: {
        selected: {
            type: StringConstructor;
        };
    };
    setup(props: any, context: any): {
        defaults: any;
        titles: any;
        select: (title: String) => void;
        selectedItem: import("vue").Ref<HTMLDivElement>;
        indicator: import("vue").Ref<HTMLDivElement>;
        container: import("vue").Ref<HTMLDivElement>;
    };
};
export default _default;
