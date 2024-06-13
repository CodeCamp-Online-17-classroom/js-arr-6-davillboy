// write code here
      const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
        let indexes = [];
        for (let i = 0; i < alphabets.length; i++) {
            if (alphabets[i] === 'a') {
            indexes.push(i);
         }
    }

    console.log(indexes); // [0, 2, 4]
