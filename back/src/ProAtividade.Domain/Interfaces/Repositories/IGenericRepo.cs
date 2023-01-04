using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.Domain.Interfaces.Repositories
{
  public interface IGenericRepo
  {
    void Add<T>(T entity) where T : class;
    void Update<T>(T entity) where T : class;
    void Delete<T>(T entity) where T : class;

    Task<bool> SaveChangesAsync();
  }
}