
// Fungsi highlightText
const highlightText = (text, highlight) => {
  
  if (!highlight.trim()) {
    return text;
  }
  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (regex.test(part)) {
      return <mark key={ index } className="highlight">{ part }</mark>;
    }
    return part;
  });
};

const monthTime = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

export { highlightText, monthTime };