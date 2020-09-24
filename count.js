function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log('Total number of vowels',vowel_count("Betty brought some butter"));
function count_letters(str)
{
  str.trim();
  newstr= str.replace(/ /g, "");
  var a = 0;
  for(var x = 0; x < newstr.length ; x++)
  {
      a += 1;
  }
  console.log('Total number of Letters',a);
}
count_letters("Betty brought some butter");