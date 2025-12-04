____ = +[]
___$ = +!+[]
__$_ = ___$+___$
__$$ = __$_+___$
_$__ = __$$+___$
_$_$ = _$__+___$
_$$_ = _$__+__$_
_$$$ = _$__+__$$
$___ = _$$$+___$
$__$ = $___+___$


_ = {
    /** Value 0 */ ____: +[],
    /** Value 1 */ ___$: +!+[],
    /** Value 2 */ __$_: ___$+___$,
    /** Value 3 */ __$$: __$_+___$,
    /** Value 4 */ _$__: __$$+___$,
    /** Value 5 */ _$_$: _$__+___$,
    /** Value 6 */ _$$_: _$__+__$_,
    /** Value 7 */ _$$$: _$__+__$$,
    /** Value 8 */ $___: _$$$+___$,
    /** Value 9 */ $__$: $___+___$,

    /** Ascii a */ _$$____$: ([] + -{})[-~[]],
    /** Ascii b */ _$$___$_: ({} + [])[-~-~[]],
    /** Ascii c */ _$$___$$: ({} + [])[-~-~-~-~-~[]],
    /** Ascii n */ _$$_$$$_: (!+[]/[]+[])[-~[]],
    /** Ascii o */ _$$_$$$$: ([]+{})[-~[]],
    /** Ascii r */ _$$$__$_: (!+[]+[])[-~[]],
    /** Ascii s */ _$$$__$$: (![]+[])[!+[]+!+[]+!+[]],
    /** Ascii t */ _$$$_$__: (!![]+[])[+[]],
    /** Ascii u */ _$$$_$_$: ([][[]]+[])[+[]],
}
$_$ = {
    _: _,
    $: (($__) => (() => {
        $__ = {}

        /**
         * Ternary Operator
         * @param _ Boolean, Conditional
         * @param __ Any, True case return value
         * @param _$ Any, False case return value
         * @returns {*} Returns '`__`' if '`_`' is `true`, '`_$`' if '`__`' is `false`, and `undefined` otherwise
         * @private
         */
        $__.__ = (_, __, _$) => (($___, ___, __$) => (() => {
            ___ = [[][{}], {_:__}]
            __$ = [[][{}], {_:_$}]

            $___ = (___[(_ === !+[]) + ![]] || __$[(_ === ![]) + ![]] || {})._
        })() || $___)()

        /**
         * Generic Iteration Function
         * @param _ Any, Starting iteration value
         * @param __ Function(*), A function that, given the current iteration value, returns true if iteration should continue
         * @param _$ Function(*), A function that, given the current iteration value, returns the next iteration value
         * @param ___ Function(*), A function that, given the current iteration value, performs some desired operation
         */
        $__.$$ = (_, __, _$, ___) => ((_$_) => {
            $__.__(
                __(_$_),
                () => ___(_$_),
                () => {
                }
            )()

            $__.__(
                __(_$_),
                () => $__.$$(_$(_), __, _$, ___),
                () => {
                }
            )()
        })(_)

        /**
         * Eval
         * @param __ String, The code to evaluate
         */
        $__.$$_ = (__) => {
            (()=>{})[
            _._$$___$$+
                _._$$_$$$$+
                _._$$_$$$_+
                _._$$$__$$+
                _._$$$_$__+
                _._$$$__$_+
                _._$$$_$_$+
                _._$$___$$+
                _._$$$_$__+
                _._$$_$$$$+
                _._$$$__$_
            ](__)()
        }
    })() || $__)(),
}
_ = [][-[]]

exports.$_$ = $_$; // Needed for tests, be sure to remove before 'releasing' :P
