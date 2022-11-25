_ = {
    _$$____$: ([] + -{})[-~[]],
    _$$___$_: ({} + [])[-~-~[]],
    _$$___$$: ({} + [])[-~-~-~-~-~[]],
    _$$_$$$_: (!+[]/[]+[])[-~[]],
    _$$_$$$$: ([]+{})[-~[]],
    _$$$__$_: (!+[]+[])[-~[]],
    _$$$__$$: (![]+[])[!+[]+!+[]+!+[]],
    _$$$_$__: (!![]+[])[+[]],
    _$$$_$_$: ([][[]]+[])[+[]],
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
            ___ = [[][{}], __]
            __$ = [[][{}], _$]

            $___ = ___[(_ === !+[]) + ![]] || __$[(_ === ![]) + ![]] || [][{}]
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
    })() || $__)(),
}


exports.$_$ = $_$; // Needed for tests, be sure to remove before 'releasing' :P
