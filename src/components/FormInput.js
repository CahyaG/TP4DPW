function FormInput({ handleChange, formInputData, handleSubmit, handleReset }) {
  return (
    <>
      <form className="mt-5" id="form-biodata">
        <div className="mb-3">
          <label htmlFor="nama" className="form-label">Nama
            Lengkap</label>
          <input type="text" className="form-control"
            id="nama" name="Nama" onChange={handleChange} value={formInputData.Nama}
            aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="tl"
            className="form-label">Tanggal Lahir</label>
          <input type="date" className="form-control"
            id="tl" name="Tanggal_Lahir" onChange={handleChange} value={formInputData.Tanggal_Lahir} />
        </div>
        <div className="mb-3">
          <label htmlFor="jk"
            className="form-label">Jenis Kelamin</label><br/>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio"
                name="Jenis_Kelamin" id="inlineRadio1"
                value="Laki-Laki" 
                checked={formInputData.Jenis_Kelamin === "Laki-Laki"}
                onChange={handleChange}
                />
                <label className="form-check-label"
                  htmlFor="inlineRadio1">Laki-Laki</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio"
                name="Jenis_Kelamin" id="inlineRadio2"
                value="Perempuan"
                checked={formInputData.Jenis_Kelamin === "Perempuan"}
                onChange={handleChange}/>
                <label className="form-check-label"
                  htmlFor="inlineRadio2">Perempuan</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio"
                name="Jenis_Kelamin" id="inlineRadio3"
                value="Other"
                checked={formInputData.Jenis_Kelamin === "Other"}
                onChange={handleChange}/>
                <label className="form-check-label"
                  htmlFor="inlineRadio3">Other
                </label>
            </div>
        </div>
        <div className="mb-3">
          <label htmlFor="Hobi"
            className="form-label">Hobi</label><br/>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox"
                name="Hobi"
                id="inlineCheckbox1" value="Ngoding" onChange={handleChange}/>
                <label className="form-check-label"
                  htmlFor="inlineCheckbox1">Ngoding</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox"
                name="Hobi"
                id="inlineCheckbox2" value="Rebahan" onChange={handleChange}/>
                <label className="form-check-label"
                  htmlFor="inlineCheckbox2">Rebahan</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox"
                name="Hobi"
                id="inlineCheckbox3" value="Ngelamun" onChange={handleChange}/>
                <label className="form-check-label"
                  htmlFor="inlineCheckbox3">Ngelamun</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox"
                name="Hobi"
                id="inlineCheckbox4" value="Baca Buku" onChange={handleChange}/>
                <label className="form-check-label"
                  htmlFor="inlineCheckbox4">Baca Buku</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox"
                name="Hobi"
                id="inlineCheckbox5" value="Nonton Youtube" onChange={handleChange}/>
                <label className="form-check-label"
                  htmlFor="inlineCheckbox5">Nonton Youtube</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox"
                name="Hobi"
                id="inlineCheckbox6" value="Dengerin Lagu" onChange={handleChange}/>
                <label className="form-check-label"
                  htmlFor="inlineCheckbox6">Dengerin Lagu</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox"
                name="Hobi"
                id="inlineCheckbox7" value="Other" onChange={handleChange}/>
                <label className="form-check-label"
                  htmlFor="inlineCheckbox7">Other</label>
            </div>
        </div>
        <div className="mb-3">
          <label htmlFor="agama" className="form-label">Agama</label>
          <select className="form-select" aria-label="Default
             select example" name="Agama" onChange={handleChange} value={formInputData.Agama} id="agama"
            >
            <option value="Islam" selected>Islam</option>
            <option value="Protestan">Protestan</option>
            <option value="Katolik">Katolik</option>
            <option value="Hindu">Hindu</option>
            <option value="Buddha">Buddha</option>
            <option value="Khonghucu">Khonghucu</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="pesan" className="form-label">Pesan</label>
          <textarea className="form-control"
            id="pesan" name="Pesan" onChange={handleChange} value={formInputData.Pesan} rows="5" ></textarea>
        </div>
        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
        <button type="reset" onClick={handleReset} className="btn btn-secondary">Clear</button>
      </form></>
  )
}

export default FormInput;