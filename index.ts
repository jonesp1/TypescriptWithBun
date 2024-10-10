import { strict as assert } from 'assert';
type Foo = {
    bar?: number;
};

function morphFoo(foo: Foo): number {
    assert(foo.bar !== undefined, "foo must exist");
    return foo.bar! * 5;
}


const foo1: Foo = { bar: 2 };
console.log(morphFoo(foo1));

const foo2: Foo = {};
console.log(morphFoo(foo2));
