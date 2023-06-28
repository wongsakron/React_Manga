async function GetData() {
  try {
    const url = "{YOU DATA BASE}"
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData
  }
  catch {
    alert("Api Error")
  }
  }

export default GetData();


