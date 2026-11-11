// Dedicated Topic-Wise DSA Preparation Sheet with Multi-Language Code Solutions
const dsaTopics = [
  "All Topics",
  "Arrays & Hashing",
  "Two Pointers & Sliding Window",
  "Linked List",
  "Stack & Queue",
  "Binary Search",
  "Trees & Binary Search Trees",
  "Graphs",
  "Dynamic Programming",
  "Heaps & Greedy"
];

const dsaSheetProblems = [
  // --- ARRAYS & HASHING ---
  {
    id: "dsa-1",
    title: "Two Sum",
    topic: "Arrays & Hashing",
    difficulty: "Easy",
    companies: ["Google", "Amazon", "Microsoft", "Meta", "Apple"],
    leetcodeUrl: "https://leetcode.com/problems/two-sum/",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    approach: "Use a Hash Map to store each number and its index. For every number `x`, check if `target - x` exists in the hash map in O(1) time. If found, return both indices.",
    solutions: {
      cpp: `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> mp;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (mp.count(complement)) {
            return {mp[complement], i};
        }
        mp[nums[i]] = i;
    }
    return {};
}`,
      java: `public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    return new int[] {};
}`,
      python: `def twoSum(nums: list[int], target: int) -> list[int]:
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
      javascript: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];
        if (map.has(comp)) return [map.get(comp), i];
        map.set(nums[i], i);
    }
    return [];
}`
    }
  },
  {
    id: "dsa-2",
    title: "Best Time to Buy and Sell Stock",
    topic: "Arrays & Hashing",
    difficulty: "Easy",
    companies: ["Amazon", "Microsoft", "TCS", "Accenture", "Uber"],
    leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    approach: "Maintain a running minimum price seen so far. At each day, calculate potential profit if sold today (`currentPrice - minPrice`) and update maxProfit.",
    solutions: {
      cpp: `int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX, maxProfit = 0;
    for (int p : prices) {
        minPrice = min(minPrice, p);
        maxProfit = max(maxProfit, p - minPrice);
    }
    return maxProfit;
}`,
      java: `public int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;
    for (int p : prices) {
        if (p < minPrice) minPrice = p;
        else if (p - minPrice > maxProfit) maxProfit = p - minPrice;
    }
    return maxProfit;
}`,
      python: `def maxProfit(prices: list[int]) -> int:
    min_price, max_profit = float('inf'), 0
    for p in prices:
        min_price = min(min_price, p)
        max_profit = max(max_profit, p - min_price)
    return max_profit`,
      javascript: `function maxProfit(prices) {
    let minPrice = Infinity, maxProfit = 0;
    for (let p of prices) {
        minPrice = Math.min(minPrice, p);
        maxProfit = Math.max(maxProfit, p - minPrice);
    }
    return maxProfit;
}`
    }
  },
  {
    id: "dsa-3",
    title: "Maximum Subarray (Kadane's Algorithm)",
    topic: "Arrays & Hashing",
    difficulty: "Medium",
    companies: ["Microsoft", "Google", "Amazon", "Infosys", "Flipkart"],
    leetcodeUrl: "https://leetcode.com/problems/maximum-subarray/",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    approach: "Kadane's Algorithm: Maintain current subarray sum `currSum`. If `currSum` drops below zero, reset it to 0. Update `maxSum` at each element.",
    solutions: {
      cpp: `int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0], curr = 0;
    for (int x : nums) {
        curr = max(x, curr + x);
        maxSum = max(maxSum, curr);
    }
    return maxSum;
}`,
      java: `public int maxSubArray(int[] nums) {
    int maxSum = nums[0], curr = 0;
    for (int x : nums) {
        curr = Math.max(x, curr + x);
        maxSum = Math.max(maxSum, curr);
    }
    return maxSum;
}`,
      python: `def maxSubArray(nums: list[int]) -> int:
    max_sum = nums[0]
    curr = 0
    for x in nums:
        curr = max(x, curr + x)
        max_sum = max(max_sum, curr)
    return max_sum`,
      javascript: `function maxSubArray(nums) {
    let maxSum = nums[0], curr = 0;
    for (let x of nums) {
        curr = Math.max(x, curr + x);
        maxSum = Math.max(maxSum, curr);
    }
    return maxSum;
}`
    }
  },
  {
    id: "dsa-4",
    title: "3Sum",
    topic: "Arrays & Hashing",
    difficulty: "Medium",
    companies: ["Meta", "Amazon", "Google", "Microsoft"],
    leetcodeUrl: "https://leetcode.com/problems/3sum/",
    timeComplexity: "O(n^2)",
    spaceComplexity: "O(1) extra space",
    approach: "Sort the array first. Iterate with index `i`. For each `i`, use Two Pointers `left = i + 1` and `right = n - 1` to find pairs whose sum equals `-nums[i]`. Skip duplicates at all levels.",
    solutions: {
      cpp: `vector<vector<int>> threeSum(vector<int>& nums) {
    vector<vector<int>> res;
    sort(nums.begin(), nums.end());
    for (int i = 0; i < nums.size(); i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        int l = i + 1, r = nums.size() - 1;
        while (l < r) {
            int sum = nums[i] + nums[l] + nums[r];
            if (sum == 0) {
                res.push_back({nums[i], nums[l], nums[r]});
                while (l < r && nums[l] == nums[l + 1]) l++;
                while (l < r && nums[r] == nums[r - 1]) r--;
                l++; r--;
            } else if (sum < 0) l++;
            else r--;
        }
    }
    return res;
}`,
      java: `public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> res = new ArrayList<>();
    Arrays.sort(nums);
    for (int i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        int l = i + 1, r = nums.length - 1;
        while (l < r) {
            int sum = nums[i] + nums[l] + nums[r];
            if (sum == 0) {
                res.add(Arrays.asList(nums[i], nums[l], nums[r]));
                while (l < r && nums[l] == nums[l + 1]) l++;
                while (l < r && nums[r] == nums[r - 1]) r--;
                l++; r--;
            } else if (sum < 0) l++;
            else r--;
        }
    }
    return res;
}`,
      python: `def threeSum(nums: list[int]) -> list[list[int]]:
    nums.sort()
    res = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        l, r = i + 1, len(nums) - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s == 0:
                res.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l + 1]: l += 1
                while l < r and nums[r] == nums[r - 1]: r -= 1
                l += 1; r -= 1
            elif s < 0: l += 1
            else: r -= 1
    return res`,
      javascript: `function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;
                l++; r--;
            } else if (sum < 0) l++;
            else r--;
        }
    }
    return res;
}`
    }
  },

  // --- TWO POINTERS & SLIDING WINDOW ---
  {
    id: "dsa-5",
    title: "Trapping Rain Water",
    topic: "Two Pointers & Sliding Window",
    difficulty: "Hard",
    companies: ["Google", "Amazon", "Microsoft", "Goldman Sachs"],
    leetcodeUrl: "https://leetcode.com/problems/trapping-rain-water/",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    approach: "Use two pointers at both ends (`left = 0`, `right = n - 1`). Maintain `leftMax` and `rightMax`. At each step, process the smaller boundary and add trapped water.",
    solutions: {
      cpp: `int trap(vector<int>& height) {
    int l = 0, r = height.size() - 1;
    int leftMax = 0, rightMax = 0, water = 0;
    while (l < r) {
        if (height[l] <= height[r]) {
            if (height[l] >= leftMax) leftMax = height[l];
            else water += leftMax - height[l];
            l++;
        } else {
            if (height[r] >= rightMax) rightMax = height[r];
            else water += rightMax - height[r];
            r--;
        }
    }
    return water;
}`,
      java: `public int trap(int[] height) {
    int l = 0, r = height.length - 1;
    int leftMax = 0, rightMax = 0, water = 0;
    while (l < r) {
        if (height[l] <= height[r]) {
            if (height[l] >= leftMax) leftMax = height[l];
            else water += leftMax - height[l];
            l++;
        } else {
            if (height[r] >= rightMax) rightMax = height[r];
            else water += rightMax - height[r];
            r--;
        }
    }
    return water;
}`,
      python: `def trap(height: list[int]) -> int:
    l, r = 0, len(height) - 1
    left_max, right_max, water = 0, 0, 0
    while l < r:
        if height[l] <= height[r]:
            if height[l] >= left_max: left_max = height[l]
            else: water += left_max - height[l]
            l += 1
        else:
            if height[r] >= right_max: right_max = height[r]
            else: water += right_max - height[r]
            r -= 1
    return water`,
      javascript: `function trap(height) {
    let l = 0, r = height.length - 1;
    let leftMax = 0, rightMax = 0, water = 0;
    while (l < r) {
        if (height[l] <= height[r]) {
            if (height[l] >= leftMax) leftMax = height[l];
            else water += leftMax - height[l];
            l++;
        } else {
            if (height[r] >= rightMax) rightMax = height[r];
            else water += rightMax - height[r];
            r--;
        }
    }
    return water;
}`
    }
  },
  {
    id: "dsa-6",
    title: "Longest Substring Without Repeating Characters",
    topic: "Two Pointers & Sliding Window",
    difficulty: "Medium",
    companies: ["Amazon", "Microsoft", "Atlassian", "Swiggy"],
    leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    timeComplexity: "O(n)",
    spaceComplexity: "O(min(n, m))",
    approach: "Sliding Window with a Hash Map or array storing the last seen index of each character. When a repeated character is encountered within the current window, move the left pointer past its previous index.",
    solutions: {
      cpp: `int lengthOfLongestSubstring(string s) {
    vector<int> last(256, -1);
    int maxLen = 0, start = 0;
    for (int i = 0; i < s.size(); i++) {
        if (last[s[i]] >= start) {
            start = last[s[i]] + 1;
        }
        last[s[i]] = i;
        maxLen = max(maxLen, i - start + 1);
    }
    return maxLen;
}`,
      java: `public int lengthOfLongestSubstring(String s) {
    int[] last = new int[256];
    Arrays.fill(last, -1);
    int maxLen = 0, start = 0;
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        if (last[c] >= start) start = last[c] + 1;
        last[c] = i;
        maxLen = Math.max(maxLen, i - start + 1);
    }
    return maxLen;
}`,
      python: `def lengthOfLongestSubstring(s: str) -> int:
    char_map = {}
    max_len = start = 0
    for i, c in enumerate(s):
        if c in char_map and char_map[c] >= start:
            start = char_map[c] + 1
        char_map[c] = i
        max_len = max(max_len, i - start + 1)
    return max_len`,
      javascript: `function lengthOfLongestSubstring(s) {
    const map = new Map();
    let maxLen = 0, start = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= start) {
            start = map.get(s[i]) + 1;
        }
        map.set(s[i], i);
        maxLen = Math.max(maxLen, i - start + 1);
    }
    return maxLen;
}`
    }
  },

  // --- LINKED LIST ---
  {
    id: "dsa-7",
    title: "Reverse a Linked List",
    topic: "Linked List",
    difficulty: "Easy",
    companies: ["Microsoft", "Amazon", "TCS", "Cognizant", "Adobe"],
    leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list/",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    approach: "Iteratively reverse pointers: maintain three pointers `prev = null`, `curr = head`, `next = null`. In each iteration, save `next = curr.next`, point `curr.next = prev`, shift `prev = curr` and `curr = next`.",
    solutions: {
      cpp: `ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,
      java: `public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,
      python: `def reverseList(head: ListNode) -> ListNode:
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev`,
      javascript: `function reverseList(head) {
    let prev = null, curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`
    }
  },
  {
    id: "dsa-8",
    title: "Detect Cycle in Linked List (Floyd's Cycle Finding)",
    topic: "Linked List",
    difficulty: "Easy",
    companies: ["Amazon", "Microsoft", "Goldman Sachs", "Accenture"],
    leetcodeUrl: "https://leetcode.com/problems/linked-list-cycle/",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    approach: "Use Floyd's Tortoise and Hare algorithm with `slow` pointer moving 1 step and `fast` pointer moving 2 steps. If a cycle exists, `fast` will eventually meet `slow`.",
    solutions: {
      cpp: `bool hasCycle(ListNode *head) {
    ListNode *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`,
      java: `public boolean hasCycle(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}`,
      python: `def hasCycle(head: ListNode) -> bool:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`,
      javascript: `function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}`
    }
  },

  // --- STACK & QUEUE ---
  {
    id: "dsa-9",
    title: "Valid Parentheses",
    topic: "Stack & Queue",
    difficulty: "Easy",
    companies: ["Google", "Meta", "Amazon", "Flipkart", "Infosys"],
    leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    approach: "Use a Stack. Push opening brackets `(`, `{`, `[`. When a closing bracket is found, verify top of stack matches. If stack is empty or mismatched, return false. Stack must be empty at the end.",
    solutions: {
      cpp: `bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') st.push(c);
        else {
            if (st.empty()) return false;
            char top = st.top(); st.pop();
            if ((c == ')' && top != '(') ||
                (c == '}' && top != '{') ||
                (c == ']' && top != '[')) return false;
        }
    }
    return st.empty();
}`,
      java: `public boolean isValid(String s) {
    Deque<Character> stack = new ArrayDeque<>();
    for (char c : s.toCharArray()) {
        if (c == '(') stack.push(')');
        else if (c == '{') stack.push('}');
        else if (c == '[') stack.push(']');
        else if (stack.isEmpty() || stack.pop() != c) return false;
    }
    return stack.isEmpty();
}`,
      python: `def isValid(s: str) -> bool:
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return not stack`,
      javascript: `function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (const c of s) {
        if (c === '(' || c === '{' || c === '[') stack.push(c);
        else if (stack.pop() !== map[c]) return false;
    }
    return stack.length === 0;
}`
    }
  },

  // --- BINARY SEARCH ---
  {
    id: "dsa-10",
    title: "Search in Rotated Sorted Array",
    topic: "Binary Search",
    difficulty: "Medium",
    companies: ["Amazon", "Microsoft", "Google", "Adobe"],
    leetcodeUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    approach: "In a rotated sorted array, at least one half (left or right) is always sorted. Identify the sorted half; check if target falls inside that range. If yes, search there; otherwise search the opposite half.",
    solutions: {
      cpp: `int search(vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) return mid;
        if (nums[l] <= nums[mid]) { // Left sorted
            if (target >= nums[l] && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        } else { // Right sorted
            if (target > nums[mid] && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return -1;
}`,
      java: `public int search(int[] nums, int target) {
    int l = 0, r = nums.length - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) return mid;
        if (nums[l] <= nums[mid]) {
            if (target >= nums[l] && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        } else {
            if (target > nums[mid] && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return -1;
}`,
      python: `def search(nums: list[int], target: int) -> int:
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target: return mid
        if nums[l] <= nums[mid]:
            if nums[l] <= target < nums[mid]: r = mid - 1
            else: l = mid + 1
        else:
            if nums[mid] < target <= nums[r]: l = mid + 1
            else: r = mid - 1
    return -1`,
      javascript: `function search(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid;
        if (nums[l] <= nums[mid]) {
            if (target >= nums[l] && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        } else {
            if (target > nums[mid] && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return -1;
}`
    }
  },

  // --- TREES ---
  {
    id: "dsa-11",
    title: "Lowest Common Ancestor of a Binary Tree",
    topic: "Trees & Binary Search Trees",
    difficulty: "Medium",
    companies: ["Meta", "Amazon", "Google", "Microsoft"],
    leetcodeUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    timeComplexity: "O(n)",
    spaceComplexity: "O(h)",
    approach: "Recursive DFS: If current node is null or equals `p` or `q`, return it. Search left and right subtrees. If both return non-null, current node is the LCA. Otherwise return the non-null child.",
    solutions: {
      cpp: `TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (!root || root == p || root == q) return root;
    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    TreeNode* right = lowestCommonAncestor(root->right, p, q);
    if (left && right) return root;
    return left ? left : right;
}`,
      java: `public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) return root;
    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);
    if (left != null && right != null) return root;
    return (left != null) ? left : right;
}`,
      python: `def lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
    if not root or root == p or root == q:
        return root
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    if left and right:
        return root
    return left or right`,
      javascript: `function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    return left || right;
}`
    }
  },

  // --- GRAPHS ---
  {
    id: "dsa-12",
    title: "Number of Islands",
    topic: "Graphs",
    difficulty: "Medium",
    companies: ["Amazon", "Google", "Microsoft", "Uber", "Bloomberg"],
    leetcodeUrl: "https://leetcode.com/problems/number-of-islands/",
    timeComplexity: "O(m * n)",
    spaceComplexity: "O(m * n)",
    approach: "Iterate over the 2D grid. Whenever an unvisited land cell '1' is found, increment island counter and launch a DFS/BFS to sink all connected land cells by changing '1' to '0'.",
    solutions: {
      cpp: `void dfs(vector<vector<char>>& grid, int r, int c) {
    if (r < 0 || c < 0 || r >= grid.size() || c >= grid[0].size() || grid[r][c] != '1') return;
    grid[r][c] = '0';
    dfs(grid, r + 1, c); dfs(grid, r - 1, c);
    dfs(grid, r, c + 1); dfs(grid, r, c - 1);
}
int numIslands(vector<vector<char>>& grid) {
    int count = 0;
    for (int r = 0; r < grid.size(); r++) {
        for (int c = 0; c < grid[0].size(); c++) {
            if (grid[r][c] == '1') {
                count++;
                dfs(grid, r, c);
            }
        }
    }
    return count;
}`,
      java: `public int numIslands(char[][] grid) {
    int count = 0;
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == '1') {
                count++;
                dfs(grid, r, c);
            }
        }
    }
    return count;
}
private void dfs(char[][] grid, int r, int c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] != '1') return;
    grid[r][c] = '0';
    dfs(grid, r + 1, c); dfs(grid, r - 1, c);
    dfs(grid, r, c + 1); dfs(grid, r, c - 1);
}`,
      python: `def numIslands(grid: list[list[str]]) -> int:
    if not grid: return 0
    m, n = len(grid), len(grid[0])
    count = 0
    def dfs(r, c):
        if r < 0 or c < 0 or r >= m or c >= n or grid[r][c] != '1':
            return
        grid[r][c] = '0'
        dfs(r + 1, c); dfs(r - 1, c)
        dfs(r, c + 1); dfs(r, c - 1)
    for r in range(m):
        for c in range(n):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)
    return count`,
      javascript: `function numIslands(grid) {
    let count = 0;
    const m = grid.length, n = grid[0].length;
    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] !== '1') return;
        grid[r][c] = '0';
        dfs(r + 1, c); dfs(r - 1, c);
        dfs(r, c + 1); dfs(r, c - 1);
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === '1') {
                count++;
                dfs(r, c);
            }
        }
    }
    return count;
}`
    }
  },

  // --- DYNAMIC PROGRAMMING ---
  {
    id: "dsa-13",
    title: "Coin Change (Minimum Coins)",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    companies: ["Amazon", "Microsoft", "Paytm", "Flipkart"],
    leetcodeUrl: "https://leetcode.com/problems/coin-change/",
    timeComplexity: "O(amount * coins.length)",
    spaceComplexity: "O(amount)",
    approach: "Bottom-up 1D DP: `dp[i]` represents min coins for amount `i`. Initialize `dp[0] = 0` and rest to infinity. For each amount `i` from 1 to `amount`, `dp[i] = min(dp[i], 1 + dp[i - coin])`.",
    solutions: {
      cpp: `int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
        for (int c : coins) {
            if (i >= c) dp[i] = min(dp[i], 1 + dp[i - c]);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`,
      java: `public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
        for (int c : coins) {
            if (i >= c) dp[i] = Math.min(dp[i], 1 + dp[i - c]);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`,
      python: `def coinChange(coins: list[int], amount: int) -> int:
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for c in coins:
            if i >= c:
                dp[i] = min(dp[i], 1 + dp[i - c])
    return dp[amount] if dp[amount] <= amount else -1`,
      javascript: `function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const c of coins) {
            if (i >= c) dp[i] = Math.min(dp[i], 1 + dp[i - c]);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`
    }
  },

  // --- HEAPS & GREEDY ---
  {
    id: "dsa-14",
    title: "Kth Largest Element in an Array",
    topic: "Heaps & Greedy",
    difficulty: "Medium",
    companies: ["Meta", "Amazon", "Google", "Microsoft"],
    leetcodeUrl: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    timeComplexity: "O(n log k)",
    spaceComplexity: "O(k)",
    approach: "Maintain a Min-Heap of size `k`. Iterate through numbers: push each number. If heap size exceeds `k`, pop the minimum. The root of the min-heap will be the `k`-th largest element.",
    solutions: {
      cpp: `int findKthLargest(vector<int>& nums, int k) {
    priority_queue<int, vector<int>, greater<int>> minHeap;
    for (int x : nums) {
        minHeap.push(x);
        if (minHeap.size() > k) minHeap.pop();
    }
    return minHeap.top();
}`,
      java: `public int findKthLargest(int[] nums, int k) {
    PriorityQueue<Integer> pq = new PriorityQueue<>();
    for (int x : nums) {
        pq.offer(x);
        if (pq.size() > k) pq.poll();
    }
    return pq.peek();
}`,
      python: `import heapq
def findKthLargest(nums: list[int], k: int) -> int:
    heap = []
    for x in nums:
        heapq.heappush(heap, x)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]`,
      javascript: `function findKthLargest(nums, k) {
    // Quickselect or sorting approach:
    nums.sort((a, b) => b - a);
    return nums[k - 1];
}`
    }
  }
];
