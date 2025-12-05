____ = +[]
___$ = +!+[]
__$_ = ___$ + ___$
__$$ = __$_ + ___$
_$__ = __$$ + ___$
_$_$ = _$__ + ___$
_$$_ = _$__ + __$_
_$$$ = _$__ + __$$
$___ = _$$$ + ___$
$__$ = $___ + ___$


_ = {
    /** Value 0 */ ____: +[],
    /** Value 1 */ ___$: +!+[],
    /** Value 2 */ __$_: ___$ + ___$,
    /** Value 3 */ __$$: __$_ + ___$,
    /** Value 4 */ _$__: __$$ + ___$,
    /** Value 5 */ _$_$: _$__ + ___$,
    /** Value 6 */ _$$_: _$__ + __$_,
    /** Value 7 */ _$$$: _$__ + __$$,
    /** Value 8 */ $___: _$$$ + ___$,
    /** Value 9 */ $__$: $___ + ___$,

    /** Ascii 0 */ __$$____: ____ + [],
    /** Ascii 1 */ __$$___$: ___$ + [],
    /** Ascii 2 */ __$$__$_: __$_ + [],
    /** Ascii 3 */ __$$__$$: __$$ + [],
    /** Ascii 4 */ __$$_$__: _$__ + [],
    /** Ascii 5 */ __$$_$_$: _$_$ + [],
    /** Ascii 6 */ __$$_$$_: _$$_ + [],
    /** Ascii 7 */ __$$_$$$: _$$$ + [],
    /** Ascii 8 */ __$$$___: $___ + [],
    /** Ascii 9 */ __$$$__$: $__$ + [],

    /** Ascii O */ _$__$$$$: ({} + [])[$___],

    /** Ascii a */ _$$____$: ([] + -{})[-~[]],
    /** Ascii b */ _$$___$_: ({} + [])[-~-~[]],
    /** Ascii c */ _$$___$$: ({} + [])[-~-~-~-~-~[]],
    /** Ascii f */ _$$__$$_: (![] + [])[+[]],
    /** Ascii l */ _$$_$$__: (![] + [])[-~-~[]],
    /** Ascii n */ _$$_$$$_: (!+[] / [] + [])[-~[]],
    /** Ascii o */ _$$_$$$$: ([] + {})[-~[]],
    /** Ascii r */ _$$$__$_: (!+[] + [])[-~[]],
    /** Ascii s */ _$$$__$$: (![] + [])[!+[] + !+[] + !+[]],
    /** Ascii t */ _$$$_$__: (!![] + [])[+[]],
    /** Ascii u */ _$$$_$_$: ([][[]] + [])[+[]],
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
            ___ = [[][{}], {_: __}]
            __$ = [[][{}], {_: _$}]

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
            (() => {
            })[(_._$$___$$ +
                _._$$_$$$$ +
                _._$$_$$$_ +
                _._$$$__$$ +
                _._$$$_$__ +
                _._$$$__$_ +
                _._$$$_$_$ +
                _._$$___$$ +
                _._$$$_$__ +
                _._$$_$$$$ +
                _._$$$__$_)
                ](__)()
        }

        /**
         * Split String
         * @param _ String, The string to split
         * @param __ Char (String of Length 1), The character to split the string at
         * @returns {*} Returns an array of strings from _ split at __ (containing no instances of __)
         */
        $__.$__ = (_, __) => ((_$_) => (() => {
            _$_ = {
                $: [],
                _: [] + [],
                __: [] - [],
            }
            $__.$$([] - [], $ => _[$] !== [][[]], $ => $ + !+[], $ => {
                $__.__(
                    _[$] === __,
                    () => {
                        _$_.$[_$_.__] = _$_._
                        _$_.__++
                        _$_._ = [] + []
                    },
                    () => {
                        _$_._ += _[$]
                    }
                )()
            })
        })() || _$_.$)()

        /**
         * Length
         * @param _ Array OR String, The item to get the length of
         * @returns {*} The length of _
         */
        $__.__$ = (_) => ((_$_) => (() => {
            _$_ = []-[]
            $__.$$([]-[], $ => _[$] !== [][[]], $ => $+!+[], $ => {
                _$_ = $+!+[]
            })
        })() || _$_)()

        /**
         * Max
         * @param _ Array OR String, Item to find max of
         * @returns {*} Max value from _
         */
        $__.__$$ = (_) => ((_$_) => ((__$) => {
            __$ = $__.__$(_)
            _$_ = _[[]-[]]
            $__.$$(+!+[], $ => $ < __$, $ => $+!+[], $ => {
                _$_ = $__.__(_[$] > _$_, _[$], _$_)
            })
        })() || _$_)()

        /**
         * Min
         * @param _ Array OR String, Item to find min of
         * @returns {*} Min value from _
         */
        $__.__$_ = (_) => ((_$_) => ((__$) => {
            __$ = $__.__$(_)
            _$_ = _[[]-[]]
            $__.$$(+!+[], $ => $ < __$, $ => $+!+[], $ => {
                _$_ = $__.__(_[$] < _$_, _[$], _$_)
            })
        })() || _$_)()

        /**
         * Slice
         * @param _ Array OR String, The item to slice
         * @param $_ Number OR Undefined, The slice starting position, defaults to 0
         * @param _$ Number OR Undefined, The slice ending position, defaults to length of the item
         * @returns {*} An array/string (matching provided type) with the values/chars between start and end
         */
        $__._$$_ = (_, $_, _$) => ((_$_) => (($__$) => {
            $_ ||= [] - []     // Default start to 0
            _$ ||= $__.__$(_)  // Default end to length of item

            _[~-[]] = +!+[]              // Try assigning a value to index -1
            $__$ = (_[~-[]] !== [][[]])  // If it worked, it's an array
            _[~-[]] = [][[]]             // Remove the evidence

            _$_ = {
                $: $__.__($__$, [], []+[]),  // The return value, default to empty array/string respectively
                _: [] - []                   // The current index, only need this for array logic
            }

            $__.$$(
                $_, // Start at the starting index
                // Iterate while position < end AND indexed value is defined. Who needs ampersands in javascript?
                $ => !(!($ < _$) + !(_[$] !== [][[]])),
                $ => $ + !+[], // Increment by 1
                $ => {
                    $__.__($__$, () => {     // It's an Array
                        _$_.$[_$_._] = _[$]  // Set the value at the current position
                        _$_._++              // Increment
                    }, () => {         // It's a String
                        _$_.$ += _[$]  // Just add the next character
                    })()
            })
        })() || _$_.$)()
    })() || $__)(),
}

module.exports = $_$ // I know, I know, I'll get this to be valid wat.js eventually
