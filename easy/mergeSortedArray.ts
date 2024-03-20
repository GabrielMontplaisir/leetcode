/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (n === 0) return
    
    let p = m - 1
    let q = n - 1
    for (let i = m + n - 1; i >= 0; i--) {
        if (nums1[p] > nums2[q]) {
            nums1[i] = nums1[p]
            p--
        }
        else {
            nums1[i] = nums2[q]
            q--
        }
        if (q < 0) break
    }
};
