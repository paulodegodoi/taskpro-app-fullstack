using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using proAtividade.Domain.Entities;

namespace ProAtividade.Data.Mappings
{
  public class AtividadeMap : IEntityTypeConfiguration<Atividade>
  {
    public void Configure(EntityTypeBuilder<Atividade> builder)
    {
      builder.ToTable("Atividades");

      builder.Property(a => a.Name)
      .HasColumnType("varchar(100)");

      builder.Property(a => a.Description)
      .HasColumnType("varchar(220)");
    }
  }
}