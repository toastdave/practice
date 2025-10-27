def main(prices: list[int]) -> int:
    low, high = 0, 1
    profit = 0

    while high < len(prices):
        if prices[high] > prices[low]:
            if prices[high] - prices[low] > profit:
                profit = prices[high] - prices[low]
        else:
            low = high
        high += 1
    
    return profit


if __name__ == "__main__":
    main([2,3,4,5,6,7])
