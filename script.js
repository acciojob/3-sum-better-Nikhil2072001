function threeSum(arr, target) {
// write your code here
	let n = arr.length;
	let ans = Number.MIN_VALUE;
	for(let i=0;i<n-2;i++){
		for(let j=i+1;j<n-1;j++){
			for(let k=j+1;k<n;k++){
				let sum = Math.abs(arr[i]+arr[j]+arr[k]);
				let diff=Math.abs(target-sum);
				if(diff<ans)
					ans=diff;
			}
		}
	}
  return ans;
}

module.exports = threeSum;
