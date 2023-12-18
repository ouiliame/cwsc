import {
  CwsType,
  CwsFunction,
  CwsTypeFunction,
  CwsTypeParam,
  CwsSelfParam,
  CwsTypeExpr,
  CwsEvalCtx,
  CwsNormalParam,
} from './types';

export const CwsMapTypeFn: CwsTypeFunction = new CwsTypeFunction(
  'Map',
  [new CwsTypeParam('%K'), new CwsTypeParam('%V')],
  new CwsTypeExpr('')
);

/*
Bool:
    - __not__(self) -> Bool
    - __and__(self, other: Bool) -> Bool
    - __or__(self, other: Bool) -> Bool
    - __into__![String](self) -> String
    - __into__![Int](self) -> Int
Iterable[%T]:
    - __iter__(self) -> Iterator[%T]
    - __into__![List[%T]](self) -> List[%T]
Map[%K, %V]:
    - __get__(self, key: Into[%K]) -> %V?
    - __get__!(self, key: Into[%K]) -> %V
    - __set__(self, key: Into[%K], value: Into[%V]) -> Void
    - get(self, key: %K) -> %V?
    - get!(self, key: Into[%K]) -> %V
    - set(self, key: %K, value: %V) -> Void
    - keys(self) -> List[%K]
    - values(self) -> List[%V]
    - entries(self) -> List[[%K, %V]]
    - contains(self, key: %K) -> Bool
List[%T]:
    - static empty() -> List[%T]
    - push(self, value: Into[%T]) -> Void
    - pop(self) -> %T
    - map(self, f: Fn[[%T], %U]) -> List[%U]
    - filter(self, f: Fn[[%T], Bool]) -> List[%T]
    - reduce(self, f: Fn[[%T, %T], %U], initial: %U) -> %U
Int:
    - add(self, other: Int) -> Int
    - sub(self, other: Int) -> Int
    - mul(self, other: Int) -> Int
    - div(self, other: Int) -> Int
    - mod(self, other: Int) -> Int
    - pow(self, other: Int) -> Int
    - neg(self) -> Int
    - static zero() -> Int
    - static one() -> Int
String:
    - add(self, other: String) -> String
    - starts_with(self, prefix: String) -> Bool
    - ends_with(self, suffix: String) -> Bool
    - contains(self, other: String) -> Bool
    - find!(self, other: String) -> Int
    - find(self, other: String) -> Int?
    - replace(self, old: String, new: String) -> String
    - split(self, separator: String) -> List[String]
    - trim(self) -> String
    - trim_start(self) -> String
    - trim_end(self) -> String
    - to_upper(self) -> String
    - to_lower(self) -> String
    - matches(self, pattern: Regex) -> Bool
    - matches!(self, pattern: Regex) -> Bool
    - get_matches(self, pattern: Regex) -> List[String]
    - get_matches!(self, pattern: Regex) -> List[String]
    - substring(self, start: Int, end?: Int) -> String
    - len(self) -> Int
    - __into__![List[U8]](self) -> List[U8]  // List[U8]!("hello")
    - chars(self) -> List[String]
  Regex:
    - match(self, text: String) -> Bool
    - get_matches(self, text: String) -> List[String]
    - __new__(pattern: String, options?: RegexOptions) -> Regex
  JsonObject:
    - keys(self) -> List[String]
    - values(self) -> List[JsonValue]
    - __get__(self, key: String) -> JsonValue?
    - __get__!(self, key: String) -> JsonValue
    - __set__(self, key: String, value: JsonValue) -> Void
    - __set__!(self, key: String, value: JsonValue) -> Void
  Addr:
    - static validate!(value: String) -> Addr
    - static unchecked(value: String) -> Addr

*/
