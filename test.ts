// 인터페이스틑 다 퍼블릭이다

interface Obj {
  name: string;
}

// 객체 리터럴은 잉여속성 검사를 함
// 변수는 잉여속성 검사를 안함
function main(obj: Obj) {}
const obj = {
  name: "hello",
  syz: "abc",
};
main(obj);

// 인터페이스 역할을 하면서 프라이베이트를 만들고 싶으면 추상 클래스를 쓰면됨
abstract class AC {
  public hello: string;
  constructor(hello: string) {
    this.hello = hello;
  }
}

// 타입 스크립트에서는 퍼블릭만있으면된다
// 타입스크립트에서는 자바와 달리 new가 없는데 가능함
// AC 클래스에 hello 스트링있고 ac 객체도 hello 스트링이 있으니까 같은 타입으로 인식한다
// 이를 구조적 타이핑이(structural typing)라함
// 자바는 명목적 파이핑(nominal typing)임
const ac: AC = {
  hello: "world",
};

function main2(obj: AC) {}
main2({
  hello: "hyunsoo",
});

// abstract class A {
//   constructor(public name: string) {}
// }

// abstract class
// 행동들을 주로 인터페이스로 만듦
interface Runnable {
  run(): void;
}
interface Walkable {
  walk(): void;
}

// 인터페이스는 다중으로 구현이 가능한데 ac는 그게 안됨
class A implements Runnable, Walkable {
  run(): void {}
  walk(): void {}
}

abstract class ACC {}
// 추상클래스는 두개 동시에 상속 안됨
// js나 ts는 하나의 클래스만 상속할 수 있는 단일 상속 언어
// class B extends AC,ACC {}

// 추상클래스를 쓰고 다중 구현이 필요한경우 인터페이스

// 자바스크립트에서는 다중상속을 구현하려면?
// 인터페이스를 클래스로 만든다
// 에러가 나는 클래스를 만듦
class Runnable {
  run() {
    throw new Error("하위 클래스에서 구현해주세요");
  }
}

class Walkable {
  walk() {
    throw new Error("하위 클래스에서 구현해주세요");
  }
}

class RunAndWalkable extends Walkable {
  run() {
    throw new Error("하위 클래스에서 구현해주세요");
  }
}

class B extends RunAndWalkable {
  override walk() {}
  override run() {}
}
