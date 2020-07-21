const params = {
    login: (token) => {
        return {
            token
        }
    },
    itemsType: {
        val: 'avl_hw',
        hardwareType() {
            this.val = 'avl_hw'
            return params
        },
        resource() {
            this.val = 'avl_resource'
            return params
        },
        retranslator() {
            this.val = 'avl_retranslator'
            return params
        },
        unit() {
            this.val = 'avl_unit'
            return params
        },
        unitGroup() {
            this.val = 'avl_unit_group'
            return params
        },
        user() {
            this.val = 'user'
            return params
        },
        route() {
            this.val = 'avl_route'
            return params
        }
    },
    propName: {
        val: 'sys_name',
        itemName() {
            this.val = 'sys_name'
            return params
        },
        itemID() {
            this.val = 'sys_id'
            return params
        }
    },
    sortType: {
        val: 'sys_name',
        itemName() {
            this.val = 'sys_name'
            return params
        },
        itemID() {
            this.val = 'sys_id'
            return params
        }
    },
    propType: {
        val: '',
        property() {
            this.val = 'property'
            return params
        },
        list() {
            this.val = 'list'
            return params
        },
        nameOfSubitem() {
            this.val = 'propitemname'
            return params
        },
        chainOfCreators() {
            this.val = 'creatortree'
            return params
        },
        chainOfAccounts() {
            this.val = 'accounttree'
            return params
        },
        customFields() {
            this.val = 'customfield'
            return params
        },
        profileFields() {
            this.val = 'profilefield'
            return params
        },
        administrativeFields() {
            this.val = 'adminfield'
            return params
        }
    },
    propValueMask: {
        val: '*',
        all() {
            this.val = '*'
            return params
        },
        biggerThan(num = "") {
            this.val = '>' + num
            return params
        },
        biggerThanOrEqual(num = "") {
            this.val = '>=' + num
            return params
        },
        smallerThan(num = "") {
            this.val = '<' + num
            return params
        },
        smallerThanOrEqual(num = "") {
            this.val = '<=' + num
            return params
        },
        equal(num = "") {
            this.val = '=' + num
            return params
        },
        custom(exp) {
            this.val = exp
            return params
        },

    },
    flags: {
        val: "1",
        Unit: {
            baseFlag() {
                params.flags.val = "1"
                return params
            },
            customProperties() {
                params.flags.val = "2"
                return params
            },
            billingProperties() {
                params.flags.val = "4"
                return params
            },
            customFields() {
                params.flags.val = "8"
                return params
            },
            image() {
                params.flags.val = "16"
                return params
            },
            messages() {
                params.flags.val = "32"
                return params
            },
            GUID() {
                params.flags.val = "64"
                return params
            },
            administrativeFields() {
                params.flags.val = "128"
                return params
            },
            advancedProperties() {
                params.flags.val = "256"
                return params
            },
            availableForCurrentMomentCommands() {
                params.flags.val = "512"
                return params
            },
            lastMessageAndPosition() {
                params.flags.val = "1024"
                return params
            },
            sensors() {
                params.flags.val = "4096"
                return params
            },
            counters() {
                params.flags.val = "8192"
                return params
            }
        },
        UnitGroups: {
            baseFlag() {
                params.flags.val = "1"
                return params
            },
            customProperties() {
                params.flags.val = "2"
                return params
            },
            billingProperties() {
                params.flags.val = "4"
                return params
            },
            customFields() {
                params.flags.val = "8"
                return params
            },
            image() {
                params.flags.val = "16"
                return params
            },
            GUID() {
                params.flags.val = "64"
                return params
            },
            administrativeFields() {
                params.flags.val = "128"
                return params
            },
            setAllPossibleFlagsToUnitGroup() {
                params.flags.val = "4611686018427387903"
                return params
            },

        },
    },
    from: {
        val: 0,
        custom(val) {
            this.val = val
            return params
        }
    },
    to: {
        val: 0,
        custom(val) {
            this.val = val
            return params
        }
    },
    force: {
        val: 0,
        newSearch() {
            this.val = 1
            return params
        }
    },
    searchItems() {
        return {
            spec: {
                itemsType: this.itemsType.val,
                propName: this.propName.val,
                propValueMask: this.propValueMask.val,
                sortType: this.sortType.val,
                propType: this.propType.val,
            },
            force: this.force.val,
            flags: this.flags.val,
            from: this.from.val,
            to: this.to.val
        }
    }
}


exports.params = params
