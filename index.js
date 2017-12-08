/**
* @author dubingyu 2017-12-08
*
* @class hash_native_back
* @example
* import HASH from '../../api/hash'
* const hash = new HASH()
*
* beforeMount(){
*   ...
*   hash.listenUrl(this,'isShowSignAccount')
*   ...
* },
*
* watch: {
*   ...
*   isShowSignAccount(curVal, oldVal) {
*     hash.modalControl(curVal, oldVal)
*   }
*   ...
* },
*
* //显示弹框事件
* showPop(signCard){
*   const _this = this
*   this.isShowSignAccount = true
*   hash.pushHash('SignAccount')
* },
*
*/
class hash_native_back {
    pushHash = hashTag => {
        if (location.hash.indexOf(hashTag) < 0) {
            history.pushState({}, '', `${location.hash}#${hashTag}`)
        }
    }

    isAddHash = () => {
        let nowHash = location.hash
        let r = new RegExp('\\#', "gi")
        let hashNum = nowHash.match(r).length
        if (hashNum === 1) {
            return false
        } else {
            return true
        }
    }

    listenUrl = (_this, stateName) => {
        window.addEventListener('popstate', function () {
            if (!this.isAddHash) {
                _this[stateName] = false
            }
        })
    }

    modalControl = (cur, old) => {
        if (cur === false && old === true && this.isAddHash()) {
            history.go(-1)
        }
    }
}
export default hash_native_back
